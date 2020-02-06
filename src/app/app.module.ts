import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { TreasuresListComponent } from './treasures-list/treasures-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocationPickerComponent,
    TreasuresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
