import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from 'src/models/articles/article.entity';
import { ArticlesService } from 'src/services/articles/articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Get()
  getArticles() {
    console.log('getArticles');
    return this.service.getArticles();
  }
  @Post()
  create(@Body() article: Article) {
    return this.service.createArticle(article);
  }

  @Put()
  update(@Body() article: Article) {
    return this.service.updateArticle(article);
  }
  @Delete(':id')
  deleteArticle(@Param() params) {
    return this.service.deleteArticle(params.id);
  }
}
