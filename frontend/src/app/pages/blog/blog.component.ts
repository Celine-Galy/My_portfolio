import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  @Input() public articleList: Article[] = []
  @Input() public selectedCategory: string = ''
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((articles) => { 
      this.articleList = this.articleList
      .filter((article) => article.published === true);
    })

  }
}
