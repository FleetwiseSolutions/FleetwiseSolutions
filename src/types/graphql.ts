/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
  ADMIN = 'ADMIN',
  SCHEDULER = 'SCHEDULER',
  DRIVER = 'DRIVER',
}

export class CreateCompanyInput {
  name: string;
}

export class UpdateCompanyInput {
  companyId: number;
  name?: Nullable<string>;
}

export class CreateUserInput {
  name: string;
  address: string;
  mobileNumber: string;
  licenseNumber: string;
  licenseExpiryDate: string;
  roles: UserRole[];
}

export class UpdateUserInput {
  uid: number;
  name?: Nullable<string>;
  address?: Nullable<string>;
  mobileNumber?: Nullable<string>;
  licenseNumber?: Nullable<string>;
  licenseExpiryDate?: Nullable<string>;
  roles?: Nullable<Nullable<UserRole>[]>;
}

export class Company {
  companyId: number;
  name: string;
  admins: User[];
  schedulers: User[];
  drivers: User[];
}

export abstract class IQuery {
  abstract companies(): Company[] | Promise<Company[]>;

  abstract company(
    companyId: number,
  ): Nullable<Company> | Promise<Nullable<Company>>;

  abstract users(): User[] | Promise<User[]>;

  abstract user(uid: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  abstract createCompany(
    createCompanyInput: CreateCompanyInput,
  ): Company | Promise<Company>;

  abstract updateCompany(
    updateCompanyInput: UpdateCompanyInput,
  ): Company | Promise<Company>;

  abstract removeCompany(
    companyId: number,
  ): Nullable<Company> | Promise<Nullable<Company>>;

  abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

  abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

  abstract removeUser(uid: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
  uid: number;
  name: string;
  address: string;
  mobileNumber: string;
  licenseNumber: string;
  licenseExpiryDate: string;
  roles: UserRole[];
  companies: Company[];
}

type Nullable<T> = T | null;
