import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitUserViewComponent } from './gituserview/gituserview.component';
import{FormsModule } from '@angular/forms';




@NgModule({
  declarations: [GitUserViewComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[GitUserViewComponent],
  providers:[]
})
export class GitdetailsModule { }
