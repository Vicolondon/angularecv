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
   public allArticles: any;
      
   constructor(
     private CrudService: CrudService
   ){}
 //


    /* 
    Methods
    */
        // Method to get the post list
        // public getSources = async (source: String, keywords: String) => {
        //   let url = 'https://newsapi.org/v2';
        //   this.postCollection = await this.CrudService.readSpecificSourceKeyword(url, 'sources', source, keywords);
        //   this.allArticles = this.postCollection.articles
        //   console.log(this.allArticles);
        // };

        public getSources = async (element) => {
          let url = 'https://newsapi.org/v2';
          this.postCollection = await this.CrudService.readSpecificSourceKeyword(url, 'sources', element.source, element.keywords);
          this.allArticles = this.postCollection.articles
          // console.log(this.allArticles);
        };
    //

 /* 
 Methods
 */
     // Method to get the post list
     public getPostList = async () => {
       let url = 'https://newsapi.org/v2';
       this.postCollection = await this.CrudService.readAllItems(url, 'sources');
       this.allArticles = this.postCollection.articles
       // console.log(this.allArticles);
     };
 //

 /* 
 Hooks
 */
   ngOnInit(){
     // Get the poost list
     // this.getPostList();
     this.getSources({source:'abc-news',keywords:''});
    //  this.getSources('abc-news', "");
   };
 //

}
