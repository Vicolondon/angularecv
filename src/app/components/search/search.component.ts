import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from '../../services/crud/crud.service';
import { Router } from '@angular/router';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  
    // Declarations
    public formSearch: FormGroup;
    public postCollection;
    public topHeadlines;
    public allArticles;
    public allSourcesName;

    // Inject FormBuilder
    constructor(
        private FormBuilder: FormBuilder,
        private CrudService: CrudService,
        private Router: Router
    ) {}

    /* 
    Methods
    */
        // Method to get the post list
        public getSources = async (source: String, keywords: String) => {
          let url = 'https://newsapi.org/v2';
          this.postCollection = await this.CrudService.readSpecificSourceKeyword(url, 'sources', source, keywords);
          this.allArticles = this.postCollection.articles
        };

        // get all sources names
        public getAllSourcesNames = async () => {
          let url = 'https://newsapi.org/v2';
          this.topHeadlines = await this.CrudService.getAllSources(url, 'sources');
          this.allSourcesName = this.topHeadlines.sources
        };
    //

    // Method to reset form
    private resetForm = ()  => {
        this.formSearch = this.FormBuilder.group({
            // name: [ null, Validators.required ],
            source: [ null, Validators.required ],
            keywords: [ null, Validators.required ]
        });
    };

  ngOnInit() {
    this.resetForm();
    this.getAllSourcesNames();
  }

}
