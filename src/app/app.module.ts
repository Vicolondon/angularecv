import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './routes/home-page/home-page.component';

// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ArticlesComponent } from './routes/articles/articles.component';

// http module
import { HttpClientModule } from "@angular/common/http";

// CRUD
import { CrudService } from "./services/crud/crud.service";
import { ObservableService } from "./services/observable/observable.service";

// Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginPageComponent } from './routes/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginComponent,
    ArticlesComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CrudService,
    ObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
