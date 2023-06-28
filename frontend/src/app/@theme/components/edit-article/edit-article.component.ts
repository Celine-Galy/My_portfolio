import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { first } from 'rxjs';
import { Article, ArticlePatch, Category } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';
import { CategoryService } from 'src/app/@core/services/category.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit{
  public selectedFile: File | undefined
  public filename: string | undefined
  public img = '';
  public slug = '';
  public selectedValue: string | undefined;
  public articlePatch: ArticlePatch | null = null
  public categoryList: Category[] = []
  public articleList: Article[] = [];
  public Editor = ClassicEditor;
  myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    image: new FormControl(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
  ) { }

ngOnInit() {
  this.categoryService.getAllCategories().subscribe((categories) => {
    console.log(categories)
 this.categoryList = categories
  })
this.articleService.getAllArticles().subscribe((articles) => {
  this.articleList = articles;
  this.articleList = this.articleList
  .filter((article) => article.id === Number(this.route.snapshot.params['id']));
  if(this.articleList[0]){
    this.img = this.articleList[0].image
    this.selectedValue = this.articleList[0].category.name
    this.myForm.get('title')?.setValue(this.articleList[0].title);
    this.myForm.get('category')?.setValue(this.articleList[0].category.name);
    this.myForm.get('content')?.setValue(this.articleList[0].content);
    this.myForm.get('image')?.setValue(this.articleList[0].image);
  }

    })
}
onSubmit() {
  if (this.myForm.valid && this.articleList[0]) {
    if (this.selectedFile) {
      this.myForm.value.image = this.selectedFile.name
      this.articleService.uploadFile(this.selectedFile).subscribe({
        next: (res) => {
          console.log(res)
        }
      })
    }
    console.log(this.myForm, 'form is valid')
    this.articlePatch = {
      id: Number(this.route.snapshot.params['id']),
      title: this.myForm.value.title!,
      category: this.categoryList.find((category) => category.id === Number(this.myForm.value.category))!,
      content: this.myForm.value.content!,
      image: this.myForm.value.image!,
      date: this.articleList[0].date,
      published: false,
    }
    this.articleService
    .updateArticle(this.articlePatch)
    .pipe(first())
    .subscribe(); 
   this.router.navigate(['/admin'], { relativeTo: this.route });
    alert('Article edited successfully!');
  }else{
    console.log(this.myForm, 'form is not valid')
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