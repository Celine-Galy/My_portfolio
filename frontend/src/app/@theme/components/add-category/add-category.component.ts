import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/@core/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
  });
  }
  onSubmit() {
    if (this.form.valid) {
      this.service.addCategory(this.form.value).subscribe({
        next: () => {
          console.log('category added')
          this.router.navigate(['/admin'], { relativeTo: this.route });
        }
      })
    }
  }
}
