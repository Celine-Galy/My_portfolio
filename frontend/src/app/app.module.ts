import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArticleComponent } from './pages/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './@theme/components/navbar/navbar.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArticleComponent } from './@theme/components/add-article/add-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleComponent,
    NavbarComponent,
    HeaderComponent,
    AdminComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
