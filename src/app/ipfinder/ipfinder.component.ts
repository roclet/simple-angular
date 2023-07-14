import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-ipfinder',
  templateUrl: './ipfinder.component.html',
  styleUrls: ['./ipfinder.component.css']
})
export class IpfinderComponent {
  constructor(private http: HttpClient){ 
    this.getIPAddress();
    this.getLocation();
  }
  public ip : string="";
  public city_name : string="";
  

  getIPAddress() {
    this.http.get('https://api.ipify.org/?format=json').subscribe((response: any) => {
      const ipAddress = response.ip;
      console.log('User IP Address:', ipAddress);
      this.ip=ipAddress;
    });
  }
  
  //using any data type is frowned upon
  getLocation(){
    this.http.get('//api.getgeoapi.com/v2/ip/check?api_key=2bdb56e0e83436385cf3fa8b1afd6627cee1b7f8').subscribe((response:any)=>{
    const city = response.city.name;
    this.city_name= city;
    })

  }

  }


