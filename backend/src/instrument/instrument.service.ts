import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Instrument, Prisma } from '@prisma/client';

@Injectable()
export class InstrumentService {
  constructor(private prisma: PrismaService) {}

  async instrument(
    instrumentWhereUniqueInput: Prisma.InstrumentWhereUniqueInput,
  ): Promise<Instrument | null> {
    return this.prisma.instrument.findUnique({
      where: instrumentWhereUniqueInput,
    });
  }

  async instruments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.InstrumentWhereUniqueInput;
    where?: Prisma.InstrumentWhereInput;
    orderBy?: Prisma.InstrumentOrderByWithRelationInput;
  }): Promise<Instrument[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.instrument.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createInstrument(
    data: Prisma.InstrumentCreateInput,
  ): Promise<Instrument> {
    return this.prisma.instrument.create({
      data,
    });
  }

  async updateInstrument(params: {
    where: Prisma.InstrumentWhereUniqueInput;
    data: Prisma.InstrumentUpdateInput;
  }): Promise<Instrument> {
    const { where, data } = params;
    return this.prisma.instrument.update({
      data,
      where,
    });
  }

  async deleteInstrument(
    where: Prisma.InstrumentWhereUniqueInput,
  ): Promise<Instrument> {
    return this.prisma.instrument.delete({
      where,
    });
  }
}
