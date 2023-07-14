import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserObjectService } from 'src/app/services/user-object.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private user: UserObjectService, private router:Router){

  }
  
  
  RegisteredUsers: any[]=[];
  UserObject:any={email:'', password:''}
 
 
  ngOnInit(): void {
    const localData= localStorage.getItem('signUpUsers');

    if (localData!=null){
      this.RegisteredUsers=JSON.parse(localData);
    }
  }

  submit(login:NgForm){
    console.log("this.submit",login);

  }
  onLogIn(){
    const UserExists = this.RegisteredUsers.find(u => u.email==this.UserObject.email&& u.password==this.UserObject.password)
    if (UserExists){
      //displays if user was found or not
      alert("login succesful");
      //sets the values in the gloabal user object
      this.user.setEmail(UserExists.email);
      this.user.setFname(UserExists.FirstName);
      this.user.setSname(UserExists.LastName);
      this.user.setCellphone(UserExists.CellPhone);
      this.user.setPassword(UserExists.password);
      this.router.navigate(['/welcome']);

    }else{
      //displays if user was found or not
      alert("failure");
    }
  }

}
