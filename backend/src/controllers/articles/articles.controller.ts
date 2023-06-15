import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { AuthGuard } from 'src/guards/auth.guards';
import { Article } from 'src/models/articles/article.entity';
import { ArticlesService } from 'src/services/articles/articles.service';
import { Public } from 'src/utils/public.decorator';
import { storage } from 'src/utils/storage.config';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }
  @Public()
  @Get('uploads/:imgpath')
  getImage(@Param('imgpath') imgpath, @Res() res): Observable<any> {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imgpath)));
  }

  @Public()
  @Get()
  getArticles() {
    return this.service.getArticles();
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
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
