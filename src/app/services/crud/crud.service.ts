// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//


/* 
Definition 
*/
@Injectable()
export class CrudService {

// Inject module(s) in the service
constructor( private HttpClient: HttpClient ){};


/* 
Methods to get API responses
*/
  // Get the API response
  private getData = (apiResponse: any) => apiResponse || {};

  // Get the API error
  private handleError = (apiError: any) => Promise.reject(apiError.error);

  // CRUD method: read item
  public readOneItem(param: String): Promise<any>{
    return this.HttpClient.get(`https://jsonplaceholder.typicode.com/posts?${param}`)
    .toPromise().then(this.getData).catch(this.handleError);
  };

  // CRUD method: read all items
  public readAllItems(): Promise<any>{
    return this.HttpClient.get(`https://jsonplaceholder.typicode.com/posts/`)
    .toPromise().then(this.getData).catch(this.handleError);
  };

  // CRUD method: create item
  public createItem(data: any): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient.post(`https://jsonplaceholder.typicode.com/posts`, data, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  };

  // CRUD method: edit an item
public updateItem(_id: String, data: any): Promise<any>{
  // Set header
  let myHeader = new HttpHeaders();
  myHeader.append('Content-Type', 'application/json');
  
  // Launch request
  return this.HttpClient.put(`https://jsonplaceholder.typicode.com/posts/${_id}`, data, { headers: myHeader })
  .toPromise().then(this.getData).catch(this.handleError);
  };

  // CRUD method: delete an item
  public deleteItem(_id: String): Promise<any>{
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient.delete(`https://jsonplaceholder.typicode.com/posts/${_id}`, { headers: myHeader })
    .toPromise().then(this.getData).catch(this.handleError);
  };
//
};
//