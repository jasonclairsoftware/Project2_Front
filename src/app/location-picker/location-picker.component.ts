import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnInit {

  @Input() currentUser:User;
  treasureLocation:string;
  showTreasuresList:boolean = false;
  showLocationMenu:boolean = true;
  showTreasureMap:boolean = false;
  locationNumber:number = 0;
  hints:Array<string> = ['0','A','B','C','D']; // position 0 is not used
  currentHint:string;

  constructor() { }

  ngOnInit() {
    this.showLocationMenu = true;
    this.showTreasuresList = false;
    this.showTreasureMap = false;

    this.hints[1] = "Look behind the counter for a brown box!";
    this.hints[2] = "Look under the table for a blue box!";
    this.hints[3] = "Look on the roof for a purple box!";
    this.hints[4] = "Look in the balcony for a green box!";
    
  }


  //Zoom levels: 15:Streets ; 20:buildings; 18 seems to work well

  openLocationOne(){
    this.showTreasuresList = false;

    this.treasureLocation=`https://maps.googleapis.com/maps/api/staticmap?center=39.631979,-79.953752
    &zoom=18
    &size=640x480
    &maptype=hybrid
    &markers=color:blue%7Clabel:T%7C39.631979,-79.953752
    &key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk`;
    this.showTreasureMap = true;
    this.locationNumber = 1;
    this.currentHint = this.hints[1];

  }

  openLocationTwo(){
    this.showTreasuresList = false;

    this.treasureLocation=`https://maps.googleapis.com/maps/api/staticmap?center=39.633532,-79.954227
    &zoom=18
    &size=640x480
    &maptype=hybrid
    &markers=color:blue%7Clabel:T%7C39.633532,-79.954227
    &key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk`;
    this.showTreasureMap = true;
    this.locationNumber = 2;
    this.currentHint = this.hints[2];

  }

  openLocationThree(){
    this.showTreasuresList = false;

    this.treasureLocation=`https://maps.googleapis.com/maps/api/staticmap?center=39.631766,-79.954436
    &zoom=18
    &size=640x480
    &maptype=hybrid
    &markers=color:blue%7Clabel:T%7C39.631766,-79.954436
    &key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk`;
    this.showTreasureMap = true;
    this.locationNumber = 3;
    this.currentHint = this.hints[3];

  }

  openLocationFour(){
    this.showTreasuresList = false;

    this.treasureLocation=`https://maps.googleapis.com/maps/api/staticmap?center=39.630871,-79.954766
    &zoom=18
    &size=640x480
    &maptype=hybrid
    &markers=color:blue%7Clabel:T%7C39.630871,-79.954766
    &key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk`;
    this.showTreasureMap = true;
    this.locationNumber = 4;
    this.currentHint = this.hints[4];

  }

  treasureBoxFound(){
    this.showTreasureMap = false;
    this.showTreasuresList = true;


  }
}
