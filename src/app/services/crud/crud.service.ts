// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObservableService } from "../observable/observable.service";
import { environment } from "../../../environments/environment";
//


/* 
Definition 
*/
@Injectable()
export class CrudService {

  apiKey: string = environment.apiKey;

  // Inject module(s) in the service
  constructor(
    private HttpClient: HttpClient,
    private ObservableService: ObservableService
  ){};


/* 
Methods to get API responses
*/
  // Get the API response
  private getData = (endpoint, apiResponse: any) => {
    // Switch endpoint to set observable value
    switch(endpoint){
    case 'users':
        // Set user info obserrbale value
        this.ObservableService.setObservableData('user',apiResponse)

        // Return data
        return apiResponse || {};
        break;
    default:
        // Retun data anytime
        return apiResponse || {};
        break;
    };
  };

  // Get the API error
  private handleError = (apiError: any) => Promise.reject(apiError.error);

  // CRUD method: read item
  public readOneItem(endpoint: String, param: String): Promise<any>{
    return this.HttpClient.get(`https://jsonplaceholder.typicode.com/${endpoint}?${param}`)
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  // CRUD method: read all items
  public readAllItems(url: string, endpoint: String): Promise<any>{
    let apiKey = environment.apiKey;
    // let myHeader = new HttpHeaders();
    // myHeader.append('Content-Type', 'application/json');
    // myHeader.append("x-api-key", apiKey);
    return this.HttpClient.get(`${url}/${endpoint}?country=us&apiKey=`+this.apiKey)
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  // CRUD method: create item
  public createItem(endpoint: String, data): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient.post(`https://jsonplaceholder.typicode.com/${endpoint}`, data, { headers: myHeader })
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  // CRUD method: edit an item
public updateItem(endpoint: String, param: String, data): Promise<any>{
  // Set header
  let myHeader = new HttpHeaders();
  myHeader.append('Content-Type', 'application/json');
  
  // Launch request
  return this.HttpClient.put(`https://jsonplaceholder.typicode.com/${endpoint}/${param}`, data, { headers: myHeader })
  .toPromise()
  .then( data => this.getData(endpoint, data))
  .catch(this.handleError);
  };

  // CRUD method: delete an item
  public deleteItem(endpoint: String, param: String): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient.delete(`https://jsonplaceholder.typicode.com/${endpoint}/${param}`, { headers: myHeader })
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  // CRUD method: read all items
  public readSpecificSource(url: string, endpoint: String, source: String): Promise<any>{
    let apiKey = environment.apiKey;
    // let myHeader = new HttpHeaders();
    // myHeader.append('Content-Type', 'application/json');
    // myHeader.append("x-api-key", apiKey);
    return this.HttpClient.get(`${url}/${endpoint}?name=${source}&apiKey=`+this.apiKey)
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  // CRUD method: read all items
  public readSpecificSourceKeyword(url: string, endpoint: String, source: String, keywords: String): Promise<any>{
    let apiKey = environment.apiKey;
    // let myHeader = new HttpHeaders();
    // myHeader.append('Content-Type', 'application/json');
    // myHeader.append("x-api-key", apiKey);
    return this.HttpClient.get(`${url}/top-headlines?sources=${source}&q=${keywords}&apiKey=`+this.apiKey)
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };

  // CRUD method: read all items
  public getAllSources(url: string, endpoint: String): Promise<any>{
    let apiKey = environment.apiKey;
    // let myHeader = new HttpHeaders();
    // myHeader.append('Content-Type', 'application/json');
    // myHeader.append("x-api-key", apiKey);
    return this.HttpClient.get(`${url}/sources?apiKey=`+this.apiKey)
    .toPromise()
    .then( data => this.getData(endpoint, data))
    .catch(this.handleError);
  };
//
};
//