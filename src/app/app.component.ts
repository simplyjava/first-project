import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { DisplayService } from './view/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
   user:User;
   
  constructor(displayService : DisplayService){
    this.user = new User();
    this.user.name ='Sandeep';
    this.user.city ='Hyderabad';
    this.user.title ='Lead';
    this.user.phone=['9949283691','9849605924']
    displayService.printToConsole(this.user.name);
  }
}
