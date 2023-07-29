/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admins` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `drivers` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `schedulers` on the `Company` table. All the data in the column will be lost.
  - The `companyId` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'SCHEDULER', 'DRIVER');

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "admins",
DROP COLUMN "drivers",
DROP COLUMN "id",
DROP COLUMN "schedulers",
DROP COLUMN "companyId",
ADD COLUMN     "companyId" SERIAL NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId");

-- CreateTable
CREATE TABLE "User" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "licenseExpiryDate" TIMESTAMP(3) NOT NULL,
    "roles" "UserRole"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "_CompanyAdmins" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CompanySchedulers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CompanyDrivers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyAdmins_AB_unique" ON "_CompanyAdmins"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyAdmins_B_index" ON "_CompanyAdmins"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanySchedulers_AB_unique" ON "_CompanySchedulers"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanySchedulers_B_index" ON "_CompanySchedulers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyDrivers_AB_unique" ON "_CompanyDrivers"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyDrivers_B_index" ON "_CompanyDrivers"("B");

-- AddForeignKey
ALTER TABLE "_CompanyAdmins" ADD CONSTRAINT "_CompanyAdmins_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyAdmins" ADD CONSTRAINT "_CompanyAdmins_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanySchedulers" ADD CONSTRAINT "_CompanySchedulers_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanySchedulers" ADD CONSTRAINT "_CompanySchedulers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyDrivers" ADD CONSTRAINT "_CompanyDrivers_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyDrivers" ADD CONSTRAINT "_CompanyDrivers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
