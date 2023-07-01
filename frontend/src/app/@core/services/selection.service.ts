import { Injectable } from "@angular/core";
import { Category } from "../api/models";
import { BehaviorSubject, Observable } from "rxjs";
import { CategoryService } from "./category.service";

@Injectable({
    providedIn: 'root',
  })
    export class SelectionService {

    private _selectedCategory$: BehaviorSubject<Category | undefined> = new BehaviorSubject<Category | undefined>(undefined)
    public get selectedCategory$(): Observable<Category | undefined> {
        return this._selectedCategory$
    }
    constructor(private categoryService: CategoryService) { }

    public setSelectedCategory(category: Category | undefined) {
        this._selectedCategory$.next(category)
    }

    }