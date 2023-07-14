import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 private users:any[]=[];

 constructor() { 

 }

 setUsers(userList:any[]){
  this.users=userList;
 }

}
