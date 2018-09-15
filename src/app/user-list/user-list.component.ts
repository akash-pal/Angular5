import { Component, OnInit , ViewEncapsulation} from '@angular/core';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserListComponent implements OnInit {
  
  names:string[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getProfiles();
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
