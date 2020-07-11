import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
