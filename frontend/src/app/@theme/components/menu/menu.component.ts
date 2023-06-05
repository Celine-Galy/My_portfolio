import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/@core/api/models';
import { CategoryService } from 'src/app/@core/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public categoryList: Category[] = []

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((categories) => {
      this.categoryList = categories;
      console.log('categories', this.categoryList)
    })
  }

}
