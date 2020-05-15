import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styles: []
})
export class ArticlesComponent implements OnInit {

    /* 
    Declarations
    */
   public postCollection: any;
      
   constructor(
     private CrudService: CrudService
   ){}
 //


 /* 
 Methods
 */
     // Method to get the post list
     public getPostList = async () => {
       this.postCollection = await this.CrudService.readAllItems('posts');
       console.log(this.postCollection);
     };
 //

 /* 
 Hooks
 */
   ngOnInit(){
     // Get the poost list
     this.getPostList();
   };
 //

}
