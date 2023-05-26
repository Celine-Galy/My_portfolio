import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  public displayArticle = false;
  public articleList: Article[] = [];

    constructor(private articleService: ArticleService) { }
  
    ngOnInit(): void {
this.articleService.getAllArticles().subscribe((articles) => {
  this.articleList = articles;
  console.log(this.articleList)
  this.articleList = this.articleList
  .filter((article) => article.published === true);
    })
} 

}