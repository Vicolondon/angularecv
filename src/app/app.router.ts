/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';
    
    // Inner
    import { HomePageComponent } from "./routes/home-page/home-page.component";
    import { LoginPageComponent } from "./routes/login-page/login-page.component";
    import { ArticlesComponent } from "./routes/articles/articles.component";
//

/* 
Export
*/
    export const AppRouterModule: Routes = [
        {
            path: '',
            component: HomePageComponent
        },
        {
            path: 'login',
            component: LoginPageComponent
        },
        {
            path: 'articles',
            component: ArticlesComponent
        }
    ];
//