import { Injectable, } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserObjectService  {
  User:any={FirstName:'',LastName:'',CellPhone:'',email:'', password:''}

  setFname(name:string){
    this.User.FirstName=name;
  }
  setSname(sname:string){
    this.User.LastName=sname;
  }
  setCellphone(cell:string){
    this.User.CellPhone=cell;
  }
  setEmail(mail:string){
    this.User.email=mail;
  }
  setPassword(password:string){
    this.User.password=password;
  }

  getFname():string{
   return this.User.FirstName;
  }
  getSname():string{
    return this.User.LastName;
  }
  getCellphone():string{
   return this.User.CellPhone;
  }
  getEmail():string{
    return this.User.email;
  }
  getPassword():string{
    return this.User.password;
  }

 
  
}
