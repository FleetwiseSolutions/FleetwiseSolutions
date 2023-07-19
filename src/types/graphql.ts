
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCompanyInput {
    name: string;
    admins: Nullable<string>[];
    schedulers: Nullable<string>[];
    drivers: Nullable<string>[];
    companyId: string;
}

export class UpdateCompanyInput {
    id: number;
    name: string;
    admins: Nullable<string>[];
    schedulers: Nullable<string>[];
    drivers: Nullable<string>[];
    companyId: string;
}

export class Company {
    id: number;
    name: string;
    admins?: Nullable<Nullable<string>[]>;
    schedulers?: Nullable<Nullable<string>[]>;
    drivers?: Nullable<Nullable<string>[]>;
    companyId: string;
}

export abstract class IQuery {
    abstract companies(): Nullable<Company>[] | Promise<Nullable<Company>[]>;

    abstract company(id: number): Nullable<Company> | Promise<Nullable<Company>>;
}

export abstract class IMutation {
    abstract createCompany(createCompanyInput: CreateCompanyInput): Company | Promise<Company>;

    abstract updateCompany(updateCompanyInput: UpdateCompanyInput): Company | Promise<Company>;

    abstract removeCompany(id: number): Nullable<Company> | Promise<Nullable<Company>>;
}

type Nullable<T> = T | null;
