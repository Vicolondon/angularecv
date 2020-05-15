import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from '../../services/crud/crud.service';
import { Router } from '@angular/router';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})

export class LoginPageComponent implements OnInit {
  
  apiKey: string = environment.apiKey;

  // Inject FormBuilder
  constructor(
      private FormBuilder: FormBuilder,
      private CrudService: CrudService,
      private Router: Router
  ) {}

  public getUserInfo = (email: String ) => {
    // console.log(email);
      // Get user infos
      const userInfo = this.CrudService.readOneItem('users', `email=${email}`);
  
      /*
      // Check user info
      if(userInfo.length > 0){
          // Change route endpoint
          this.Router.navigateByUrl('/connected');
      }
      */
  };

  ngOnInit() {
  }

}
