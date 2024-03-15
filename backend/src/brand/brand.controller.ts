import { Controller, Param } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from '@prisma/client';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  async getBrandBydId(@Param('id') id: string): Promise<Brand | null> {
    return this.brandService.brand({ id });
  }
}
