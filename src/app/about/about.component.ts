import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userName:string;
  newUserName:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.cast.subscribe(userName=>this.userName = userName);
  }

  editUserName(){
    this.userService.editUserName(this.newUserName);
  }

}
