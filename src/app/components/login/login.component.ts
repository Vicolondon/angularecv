import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from '../../services/crud/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  
    // Declarations
    public formData: FormGroup;

    // Inject FormBuilder
    constructor(
        private FormBuilder: FormBuilder,
        private CrudService: CrudService,
        private Router: Router
    ) {}

    public getUserInfo = (email: String ) => {
        // Get user infos
        const userInfo = this.CrudService.readOneItem('users', `email=${email}`);
    
        /**
        // Check user info
        if(userInfo.length > 0){
            // Change route endpoint
            this.Router.navigateByUrl('/connected');
        } */
    };
    // Method to reset form
    private resetForm = ()  => {
        this.formData = this.FormBuilder.group({
            // name: [ null, Validators.required ],
            email: [ null, Validators.required ]
        });
    };

    // Start 
    ngOnInit() {
        this.resetForm();
    }

}
