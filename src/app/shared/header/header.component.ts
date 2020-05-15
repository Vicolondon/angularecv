import { Component, OnInit } from '@angular/core';
import { ObservableService } from "../../services/observable/observable.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

    /* 
    Declaration
    */
        // Properties
        public userData: any;

        constructor(
            private ObservableService: ObservableService
        ){
            // Get user data observer
            this.ObservableService.getUserInfo().subscribe( userDataObserver => {
                if(userDataObserver === null) { this.userData = null }
                else{ 
                    if(userDataObserver.length > 0){
                        // Set local storage
                        localStorage.setItem('userEmail', userDataObserver[0].email );
            
                        // Update userData value
                        this.userData = userDataObserver[0];
                    }
                    else{
                        this.userData = null
                    }
                }
            })
        }
        public logout = () => {
            // Delete localstorage
            localStorage.removeItem('userEmail');
        
            // Set user info obserrbale value
            this.ObservableService.setObservableData('users', null)
        }

        ngOnInit(){};

}
