import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Category } from 'src/models/category/category.entity';
import { CategoryService } from 'src/services/category/category.service';
import { Public } from 'src/utils/public.decorator';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  create(@Body() category: Category) {
    return this.service.createCategory(category);
  }
  @Public()
  @Get()
  getAll() {
    return this.service.getAllCategories();
  }
  @Public()
  @Get(':name')
  get(@Param() params) {
    return this.service.getCategoryByName(params.name);
  }
}
