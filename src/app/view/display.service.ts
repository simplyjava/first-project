import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

    printToConsole( value:any){
      console.log(value);
    }
}
