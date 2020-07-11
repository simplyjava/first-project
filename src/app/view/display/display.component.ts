import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(displayService:DisplayService) { 
    displayService.printToConsole('Display Service.');
  }

  ngOnInit(): void {
  }

}
