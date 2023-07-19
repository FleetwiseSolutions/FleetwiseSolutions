import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from 'src/types/graphql';
import { UpdateCompanyInput } from 'src/types/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  create({ name, admins, schedulers, drivers, companyId }: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {name, admins, schedulers, drivers, companyId}
    })
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
