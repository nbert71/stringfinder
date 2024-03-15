import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Model, Prisma } from '@prisma/client';

@Injectable()
export class ModelService {
  constructor(private prisma: PrismaService) {}

  async model(
    modelWhereUniqueInput: Prisma.ModelWhereUniqueInput,
  ): Promise<Model | null> {
    return this.prisma.model.findUnique({
      where: modelWhereUniqueInput,
    });
  }

  async models(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ModelWhereUniqueInput;
    where?: Prisma.ModelWhereInput;
    orderBy?: Prisma.ModelOrderByWithRelationInput;
  }): Promise<Model[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.model.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createModel(data: Prisma.ModelCreateInput): Promise<Model> {
    return this.prisma.model.create({
      data,
    });
  }

  async updateModel(params: {
    where: Prisma.ModelWhereUniqueInput;
    data: Prisma.ModelUpdateInput;
  }): Promise<Model> {
    const { where, data } = params;
    return this.prisma.model.update({
      data,
      where,
    });
  }

  async deleteModel(where: Prisma.ModelWhereUniqueInput): Promise<Model> {
    return this.prisma.model.delete({
      where,
    });
  }
}
