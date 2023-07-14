
import { UsersService } from '../../services/users.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserObjectService } from 'src/app/services/user-object.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  //array to store user objects
  RegisteredUsers: any[]=[];
  UserObject:any={FirstName:'',LastName:'',CellPhone:'',email:'', password:''}
  Users:UsersService= new UsersService;
  
  ngOnInit(): void {
    
  }
  OnRegister(){
    //commits users to local memory
    console.log(this.RegisteredUsers.push(this.UserObject));
    localStorage.setItem('signUpUsers',JSON.stringify(this.RegisteredUsers));

    //commits it to userservice(to be used in log in)
    this.Users.setUsers(this.RegisteredUsers);

    //routes to another page
    this.router.navigate(['/login']);
    

  }
  
  constructor(private router:Router) { }
 
}
