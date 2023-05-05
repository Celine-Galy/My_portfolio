import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/models/articles/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}
  async createArticle(article: Article) {
    return await this.articlesRepository.save(article);
  }

  async getArticles(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(_id: number): Promise<Article[]> {
    return await this.articlesRepository.find({
      select: ['title', 'content'],
      where: [{ id: _id }],
    });
  }

  async updateArticle(article: Article) {
    this.articlesRepository.save(article);
  }

  async deleteArticle(article: Article) {
    this.articlesRepository.delete(article);
  }
}