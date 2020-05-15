/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGapp';
}*/
/* 
Import
*/
  // Angular
  import { Component, OnInit } from '@angular/core';
//

/* 
Componant configuration
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
    `
  })
//


/* 
Componant class definition
*/
  export class AppComponent implements OnInit {
    title = 'ANGapp';
    
    constructor(){}

    ngOnInit(){}
  }
//
