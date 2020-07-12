import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private displayService:DisplayService,private httpClient:HttpClient) { 
    displayService.printToConsole('Display Service.');
  }

  ngOnInit(): void {
    this.httpClient.get('https://api.github.com/users/simplyjava').subscribe((response)=>this.displayService.printToConsole(response));
  }

}
