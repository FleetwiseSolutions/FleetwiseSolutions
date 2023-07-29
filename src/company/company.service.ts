import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyInput, UpdateCompanyInput } from 'src/types/graphql';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  create({ name }: CreateCompanyInput) {
    return this.prisma.company.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.company.findMany({
      include: {
        admins: true,
        schedulers: true,
        drivers: true,
      },
    });
  }

  findOne(companyId: number) {
    return this.prisma.company.findUnique({
      where: { companyId },
      select: {
        companyId: true,
        name: true,
        admins: true,
        schedulers: true,
        drivers: true,
      },
    });
  }

  update(companyId: number, updateCompanyInput: UpdateCompanyInput) {
    return this.prisma.company.update({
      where: { companyId },
      data: updateCompanyInput,
    });
  }

  remove(companyId: number) {
    return this.prisma.company.delete({
      where: { companyId },
    });
  }
}
