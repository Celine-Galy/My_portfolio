import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Article, ArticlePatch } from 'src/app/@core/api/models';
import { ArticleService } from 'src/app/@core/services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit{
  public articlePatch: ArticlePatch | null = null;
  public articleList: Article[] = [];
  public Editor = ClassicEditor;
  myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

ngOnInit() {
this.articleService.getAllArticles().subscribe((articles) => {
  this.articleList = articles;
  this.articleList = this.articleList
  .filter((article) => article.id === Number(this.route.snapshot.params['id']));
  if(this.articleList[0]){
    this.myForm.get('title')?.setValue(this.articleList[0].title);
    this.myForm.get('content')?.setValue(this.articleList[0].content);
  }

    })
}
onSubmit() {
  if (this.myForm.valid && this.articleList[0]) {
    this.articlePatch = {
      id: Number(this.route.snapshot.params['id']),
      title: this.myForm.value.title!,
      content: this.myForm.value.content!,
      date: this.articleList[0].date,
      published: false,
    }
    this.articleService
    .updateArticle(this.articlePatch)
    .subscribe(); 
   this.router.navigate(['/admin'], { relativeTo: this.route });
    alert('Article edited successfully!');
  }else{
    console.log(this.myForm, 'form is not valid')
  }

}  
}