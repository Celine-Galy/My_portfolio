import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddArticleComponent } from './@theme/components/add-article/add-article.component';
import { EditArticleComponent } from './@theme/components/edit-article/edit-article.component';
import { LoginComponent } from './@theme/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AddCategoryComponent } from './@theme/components/add-category/add-category.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RegisterComponent } from './@theme/components/register/register.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'ajouter', canActivate: [AuthGuard], component: AddArticleComponent },
  { path: 'edit/:id', canActivate: [AuthGuard], component: EditArticleComponent },
  { path: 'ajouter-categorie', canActivate: [AuthGuard], component: AddCategoryComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
