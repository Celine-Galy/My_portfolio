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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArticleComponent,
    NavbarComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
