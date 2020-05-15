/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';
    
    // Inner
    import { HomePageComponent } from "./routes/home-page/home-page.component";
    import { LoginComponent } from "./routes/login/login.component";
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
            component: LoginComponent
        }
    ];
//