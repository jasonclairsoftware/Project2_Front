import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  parentMessage = "WOOHA!!!";

  usernm:string;
  userpassword:string;
  infoManager:string;
  isManager:boolean;
  loginSuccessful:boolean = false;
  currentUser:User;
  showLogout:boolean = false;
  
  constructor() { }


  ngOnInit() {
  }

  submit(){
    if (this.infoManager.toLowerCase() == 'true'){
      this.isManager = true;
    }else{
      this.isManager = false;
    }

    this.currentUser = new User(0,this.usernm,this.userpassword,this.isManager);

    console.log(this.currentUser);


    this.loginSuccessful = true;
    this.showLogout = true;
  }


  doLogout(){
    this.loginSuccessful = false;
    this.currentUser = null;
    this.showLogout = false;

    this.usernm = "";
    this.userpassword = "";
    this.infoManager = "";

  }
}
