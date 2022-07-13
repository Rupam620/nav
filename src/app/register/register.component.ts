import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
   
   email: '',
    password: ''

  }
  constructor() { }

  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.registerUserData)
  }
  

}
