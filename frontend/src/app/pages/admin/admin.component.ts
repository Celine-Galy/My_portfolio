import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  public articleList: Article[] = [];
  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((articles) => {
      this.articleList = articles;
        })
  }

  public deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe(() => {
      this.articleList = this.articleList.filter((article) => article.id !== id);
    });
  }

  public navigateToEdit(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  public togglePublish(id: number) {
    this.articleService.getArticle(id).subscribe(() => {
      this.articleList = this.articleList.map((article) => {
        if (article.id === id) {
          article.published = !article.published;
          this.articleService.updateArticle(article).subscribe();
        }
        return article;
      });
    });
  }

}
