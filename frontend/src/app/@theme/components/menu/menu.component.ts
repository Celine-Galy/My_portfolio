import { Component,  EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';
import { CategoryService } from 'src/app/@core/services/category.service';
import { SelectionService } from 'src/app/@core/services/selection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
public categoryList: Category[] = []
public selectedCategory: string | undefined;

  constructor(
    private service: CategoryService,
    private selectionService: SelectionService,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((categories) => {
      console.log('cat', categories)
      this.categoryList = categories
        .map((category) => {
          return {
            ...category,
            articles: category.articles.filter((article) => article.published),
          }
        }
        )
        .filter((category) => category.articles.length > 0)
    })
  }

public searchByCategory(category: string): void {
 this.articleService.getArticlesByCategory(category).subscribe((articles) => {
   console.log('art', articles)
    this.selectionService.setSelectedCategory(articles[0].category)
  }
  )
}
public displayAll(): void {
  this.selectionService.setSelectedCategory(undefined)
}
}
