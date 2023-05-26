import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guards';
import { Article } from 'src/models/articles/article.entity';
import { ArticlesService } from 'src/services/articles/articles.service';
import { Public } from 'src/utils/public.decorator';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Public()
  @Get()
  getArticles() {
    console.log('getArticles');
    return this.service.getArticles();
  }
  @Post()
  create(@Body() article: Article) {
    return this.service.createArticle(article);
  }

  @UseGuards(AuthGuard)
  @Put()
  update(@Body() article: Article) {
    return this.service.updateArticle(article);
  }
  @Delete(':id')
  deleteArticle(@Param() params) {
    return this.service.deleteArticle(params.id);
  }
}
