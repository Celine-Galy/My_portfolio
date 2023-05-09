import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: 'accueil', component: HomepageComponent },
  { path: 'admin', component: AdminComponent },
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
