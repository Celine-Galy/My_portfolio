import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { first } from 'rxjs';
import { Category } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';
import { CategoryService } from 'src/app/@core/services/category.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  form!: FormGroup
  public categoryList: Category[] = []
  public Editor = ClassicEditor
  public selectedFile: File | undefined
  public filename: string | undefined
  
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

ngOnInit(): void {
this.categoryService.getAllCategories().subscribe((categories) => {
  console.log('categories', categories)
  this.categoryList = categories
})
  this.form = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    image: [''],
    category: ['', Validators.required],
    date: new Date(),
  });
}

onSubmit() {

 if (this.form.valid) {
  if (this.selectedFile) {
    this.form.value.image = this.selectedFile.name
    this.articleService.uploadFile(this.selectedFile).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }
  this.articleService
  .addArticle(this.form.value)
  .pipe(first())
    .subscribe({
      next: () => {
        this.router.navigate(['/admin'], { relativeTo: this.route });
      }
    });
  }
  else {
    console.log(this.form, 'form is not valid')
  }
}
onFileSelected(event : any) {
  if (event.target) {
    this.selectedFile = <File>event.target.files[0]
    console.log('selectedFile', this.selectedFile)
    this.filename = this.selectedFile.name
  }
}
}