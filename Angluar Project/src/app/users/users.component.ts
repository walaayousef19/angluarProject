import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUser } from '../Shared class/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UserList:IUser[];
  errorMsg: any;

  constructor( private userService:UserService) { }
  ngOnInit(): void {
  
    this.userService.returnAllUsers().subscribe(
      productData=>
      {
        this.UserList=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )}

}
