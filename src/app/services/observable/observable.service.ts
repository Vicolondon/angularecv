/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//

/* 
Definition and export
*/
@Injectable({
  providedIn: 'root'
})

export class ObservableService {

  protected userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public getUserInfo(): Observable<any> { return this.userInfo };
  
  public setObservableData = (type: string, data: any) => {
    switch(type){ 
      case 'user':
  this.userInfo.next(data);
      break;
  
      default:
      break;
    };
  };

  constructor() {}

}
//