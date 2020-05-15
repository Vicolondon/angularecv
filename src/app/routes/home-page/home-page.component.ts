import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  constructor(
      private CrudService: CrudService,
      private Router: Router
    ) { }

  private getUserInfo = (email: String ) => {
      // Use CrudService to get user infos
      const userInfo = this.CrudService.readOneItem('users', `email=${email}`);

      console.log(userInfo);
     
      /*
        // Check user info
        if(userInfo.length > 0){
            // Change route endpoint
            this.Router.navigateByUrl('/connected');
        }
        */
  };

//   private getUsersInfo = ( ) => {
//       // Use CrudService to get user infos
//       this.CrudService.readAllItems('users')
//       .then( data => {
//           console.log('SUCCES request', data);
//       })
//       .catch( error => {
//           console.log('ERROR request', error);
//       });
//   };

  async ngOnInit(){
    //   this.getUserInfo('Sincere@april.biz');
      // this.getUserInfo('Sincere@april.biz');
      // this.getUsersInfo();
  };

}
