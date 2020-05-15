import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


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
        private FormBuilder: FormBuilder
    ) {}

    // Method to reset form
    private resetForm = ()  => {
        this.formData = this.FormBuilder.group({
            email: [ null, Validators.required ]
        });
    };

    // Start 
    ngOnInit() {
        this.resetForm();
    }

}
