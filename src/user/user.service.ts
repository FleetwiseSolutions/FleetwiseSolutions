import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from '../types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        companiesAdmin: true,
        companiesScheduler: true,
        companiesDriver: true,
      },
    });
  }

  findOne(uid: number) {
    return this.prisma.user.findUnique({
      where: { uid },
      include: {
        companiesAdmin: true,
        companiesScheduler: true,
        companiesDriver: true,
      },
    });
  }

  update(uid: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { uid },
      data: updateUserInput,
    });
  }

  remove(uid: number) {
    return this.prisma.user.delete({
      where: { uid },
    });
  }
}
