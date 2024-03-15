import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { StringSet, Prisma } from '@prisma/client';

@Injectable()
export class StringSetService {
  constructor(private prisma: PrismaService) {}

  async stringSet(
    stringSetWhereUniqueInput: Prisma.StringSetWhereUniqueInput,
  ): Promise<StringSet | null> {
    return this.prisma.stringSet.findUnique({
      where: stringSetWhereUniqueInput,
    });
  }

  async stringSets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StringSetWhereUniqueInput;
    where?: Prisma.StringSetWhereInput;
    orderBy?: Prisma.StringSetOrderByWithRelationInput;
  }): Promise<StringSet[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.stringSet.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createStringSet(data: Prisma.StringSetCreateInput): Promise<StringSet> {
    return this.prisma.stringSet.create({
      data,
    });
  }

  async updateStringSet(params: {
    where: Prisma.StringSetWhereUniqueInput;
    data: Prisma.StringSetUpdateInput;
  }): Promise<StringSet> {
    const { where, data } = params;
    return this.prisma.stringSet.update({
      data,
      where,
    });
  }

  async deleteStringSet(
    where: Prisma.StringSetWhereUniqueInput,
  ): Promise<StringSet> {
    return this.prisma.stringSet.delete({
      where,
    });
  }
}
