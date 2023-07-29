import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import {
  Company,
  CreateCompanyInput,
  UpdateCompanyInput,
} from '../types/graphql';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation('createCompany')
  create(@Args('createCompanyInput') createCompanyInput: CreateCompanyInput) {
    return this.companyService.create(createCompanyInput);
  }

  @Query('companies')
  findAll() {
    return this.companyService.findAll();
  }

  @Query('company')
  findOne(@Args('id') id: number) {
    return this.companyService.findOne(id);
  }

  @Mutation('updateCompany')
  update(@Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput) {
    return this.companyService.update(
      updateCompanyInput.companyId,
      updateCompanyInput,
    );
  }

  @Mutation('removeCompany')
  remove(@Args('id') id: number) {
    return this.companyService.remove(id);
  }
}
