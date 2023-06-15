import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/models/category/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async createCategory(category: Category) {
    return await this.categoryRepository.save(category);
  }
  async getAllCategories() {
    return await this.categoryRepository.find({
      relations: { articles: true },
    });
  }
  async getCategoryByName(name: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: { articles: true },
      select: ['id', 'name', 'articles'],
      where: [{ name: name }],
    });
  }
}
