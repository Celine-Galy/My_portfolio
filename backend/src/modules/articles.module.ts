import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from 'src/controllers/articles/articles.controller';
import { Article } from 'src/models/articles/article.entity';
import { ArticlesService } from 'src/services/articles/articles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
