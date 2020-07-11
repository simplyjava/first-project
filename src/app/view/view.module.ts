import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { DisplayService } from './display.service';



@NgModule({
  declarations: [DisplayComponent],
  imports: [
    CommonModule
  ],
  exports:[DisplayComponent],
  providers:[DisplayService]
})
export class ViewModule { }
