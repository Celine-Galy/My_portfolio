import { Component, Input,  OnChanges,  OnInit, SimpleChanges } from '@angular/core'
import { Article } from 'src/app/@core/api/models'
import { ArticleService } from 'src/app/@core/services/article.service'
import { SelectionService } from 'src/app/@core/services/selection.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
 public selectedCategory: string | undefined;
  public articleList: Article[] = [];
  public categoryList: any = [];

    constructor(
      private articleService: ArticleService,
      private selectionService: SelectionService
      ) { }
  
    ngOnInit(): void {
   this.selectionService.selectedCategory$.subscribe({
      next: (data) => (
        this.categoryList = data
      ),
 
  })
      this.articleService.getAllArticles().subscribe((articles) => {
        this.articleList = articles;
        this.articleList = this.articleList
        .filter((article) => article.published === true);
          })
} 


}