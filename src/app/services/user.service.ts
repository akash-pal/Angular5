import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName = new BehaviorSubject<string>('Jim');
  cast = this.userName.asObservable();

  constructor(private httpClient:HttpClient) { }

  names:string[];

  editUserName(nameUserName){
    //replace the value
    this.userName.next(nameUserName);
  }

  getProfiles(){
    return this.httpClient.get('https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/');
  }


}
