import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Pattern, Prisma } from '@prisma/client';

@Injectable()
export class PatternService {
  constructor(private prisma: PrismaService) {}

  async pattern(
    patternWhereUniqueInput: Prisma.PatternWhereUniqueInput,
  ): Promise<Pattern | null> {
    return this.prisma.pattern.findUnique({
      where: patternWhereUniqueInput,
    });
  }

  async patterns(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PatternWhereUniqueInput;
    where?: Prisma.PatternWhereInput;
    orderBy?: Prisma.PatternOrderByWithRelationInput;
  }): Promise<Pattern[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pattern.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPattern(data: Prisma.PatternCreateInput): Promise<Pattern> {
    return this.prisma.pattern.create({
      data,
    });
  }

  async updatePattern(params: {
    where: Prisma.PatternWhereUniqueInput;
    data: Prisma.PatternUpdateInput;
  }): Promise<Pattern> {
    const { where, data } = params;
    return this.prisma.pattern.update({
      data,
      where,
    });
  }

  async deletePattern(where: Prisma.PatternWhereUniqueInput): Promise<Pattern> {
    return this.prisma.pattern.delete({
      where,
    });
  }
}
