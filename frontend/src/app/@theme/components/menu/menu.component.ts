import { Component,  EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/@core/api/models';
import { CategoryService } from 'src/app/@core/services/category.service';
import { SelectionService } from 'src/app/@core/services/selection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
public categoryList: Category[] = []
public selectedCategory: string = ''
  constructor(private service: CategoryService,
    private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((categories) => {
      this.categoryList = categories;
      console.log('categories', this.categoryList)
    })
  }

public searchByCategory(category: string): void {
 this.service.getCategoryByName(category).subscribe((category) => {
    console.log('categoryMenu', category)
    this.selectionService.setSelectedCategory(category)
  })
}
}
