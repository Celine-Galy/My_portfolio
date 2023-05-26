import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { first } from 'rxjs';
import { ArticleService } from 'src/app/@core/services/article.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{
  form!: FormGroup
  public Editor = ClassicEditor;
  
  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,) { }

ngOnInit(): void {
  this.form = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    date: new Date(),
  });
}
// }
onSubmit() {
  
 if (this.form.valid) {
  this.articleService
  .addArticle(this.form.value)
  .pipe(first())
    .subscribe({
      next: () => {
        this.router.navigate(['/admin'], { relativeTo: this.route });
      }
    });
  }
  // if (this.form.valid && this.id) {
  //   console.log(this.form.value)
  //   this.editArticle(this.id)
 
  // }
  else {
    console.log(this.form, 'form is not valid')
  }
}
}