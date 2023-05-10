import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ArticleComponent } from './pages/article/article.component';
import { AddArticleComponent } from './@theme/components/add-article/add-article.component';

const routes: Routes = [
  { path: 'accueil', component: HomepageComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'ajouter', component: AddArticleComponent },
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
