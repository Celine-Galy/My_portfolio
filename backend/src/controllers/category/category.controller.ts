import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from 'src/models/category/category.entity';
import { CategoryService } from 'src/services/category/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  create(@Body() category: Category) {
    return this.service.createCategory(category);
  }
  @Get()
  getAll() {
    return this.service.getAllCategories();
  }
}
