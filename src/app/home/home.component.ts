import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  names:any[];

  selectedName:string;

  userName:string;

  constructor(private httpClient:HttpClient, private userService:UserService){
    this.getProfiles();
  }

  ngOnInit(){
    this.userService.cast.subscribe(userName=>this.userName = userName);
  }

  showSelected(event:any){
    this.selectedName = event;
  }

  findName(event:any){
    console.log(event.target.value);
  }

  getProfiles(){
    this.userService.getProfiles().subscribe((data:any[])=>{
      console.log(data);      
      this.names = data.map(item=>{
        return item.name;
      });
    });
  }


}
