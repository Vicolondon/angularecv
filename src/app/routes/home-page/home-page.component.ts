import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
  constructor(private CrudService: CrudService) { }

  private getUserInfo = (email: String ) => {
      // Use CrudService to get user infos
      this.CrudService.readOneItem('users', `email=${email}`)
      .then( data => {
          console.log('SUCCES request', data);
      })
      .catch( error => {
          console.log('ERROR request', error);
      });
  };

  private getUsersInfo = ( ) => {
      // Use CrudService to get user infos
      this.CrudService.readAllItems('users')
      .then( data => {
          console.log('SUCCES request', data);
      })
      .catch( error => {
          console.log('ERROR request', error);
      });
  };

  ngOnInit(){
      // this.getUserInfo('Sincere@april.biz');
      // this.getUsersInfo();
  };

}
