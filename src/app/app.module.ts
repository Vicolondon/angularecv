import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';

// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './routes/login/login.component';
import { ArticlesComponent } from './routes/articles/articles.component';

// http module
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
