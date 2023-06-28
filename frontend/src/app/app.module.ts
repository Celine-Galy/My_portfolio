import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArticleComponent } from './@theme/components/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './@theme/components/navbar/navbar.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArticleComponent } from './@theme/components/add-article/add-article.component';
import { EditArticleComponent } from './@theme/components/edit-article/edit-article.component';
import { LoginComponent } from './@theme/components/login/login.component';
import { TokenInterceptorProvider } from './helpers/token.interceptor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MenuComponent } from './@theme/components/menu/menu.component';
import { AddCategoryComponent } from './@theme/components/add-category/add-category.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './@theme/components/portfolio/portfolio.component';
import { CvComponent } from './@theme/components/cv/cv.component';
import { RegisterComponent } from './@theme/components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleComponent,
    NavbarComponent,
    HeaderComponent,
    AdminComponent,
    AddArticleComponent,
    AddCategoryComponent,
    EditArticleComponent,
    LoginComponent,
    MenuComponent,
    BlogComponent,
    PortfolioComponent,
    CvComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
