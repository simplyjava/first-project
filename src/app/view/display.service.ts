import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

    printToConsole( value:String){
      console.log("printed"+value);
    }
}
