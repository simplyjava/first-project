import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from 'src/app/view/display.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gituserview',
  templateUrl: './gituserview.component.html',
  styleUrls: ['./gituserview.component.css']
})
export class GitUserViewComponent implements OnInit {
  userName:String;
  response:any;

  constructor(private displayService:DisplayService, private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe(
      (response)=>{
        this.displayService.printToConsole(response)
        this.response = response;
      }
     
    );
  }
  

}
