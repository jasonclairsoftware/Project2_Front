import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-treasures-list',
  templateUrl: './treasures-list.component.html',
  styleUrls: ['./treasures-list.component.css']
})
export class TreasuresListComponent implements OnInit {

  @Input() locationNumber:number;
  @Input() currentUser:User;

  treasures:Array<string> = [];
  showTreasures:boolean = false;

  constructor() { }

  revealTreasureInventory(){
    this.treasures = [];  //re-initialize array
    alert("Opening treasure box #" + this.locationNumber);
    switch(this.locationNumber){
      case 1:{
          this.treasures.push("1FirstTreasure");
          this.treasures.push("1SecondTreasure");
          this.treasures.push("1ThirdTreasure");
          
        break;
      }
      case 2:{
        this.treasures.push("2FirstTreasure");
        this.treasures.push("2SecondTreasure");
        this.treasures.push("2ThirdTreasure");
        break;
      }
      case 3:{
        this.treasures.push("3FirstTreasure");
        this.treasures.push("3SecondTreasure");
        this.treasures.push("3ThirdTreasure");
        break;
      }
      case 4:{
        this.treasures.push("4FirstTreasure");
        this.treasures.push("4SecondTreasure");
        this.treasures.push("4ThirdTreasure");
        break;
      }
    }
    this.showTreasures = true;
  }


  ngOnInit() {
    console.log("In treasures-List component");
    console.log(this.currentUser);
  }

  swapTreasure(){
    // Put code here later
  }

  addTreasure(){
    //put code here
  }

  removeTreasure(){
    //put code here
  }

}
