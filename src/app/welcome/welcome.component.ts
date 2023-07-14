import { Component } from '@angular/core';
import { UserObjectService } from '../services/user-object.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(public user:UserObjectService){}
  

}
