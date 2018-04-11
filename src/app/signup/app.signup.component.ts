import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../model/account';
 
@Component({
  selector: 'app-signup-form',
  templateUrl: './app.signup.component.html',
  styleUrls: ['./app.signup.component.css']
})
export class SignupComponent implements OnInit {
 

  private account:Account;
 
  constructor() { }
  
    ngOnInit() {
        this.account = new Account();
    }
  
    onFormSubmit({ value, valid}: { value: Account, valid: boolean }) {
    	this.account = value;
    	console.log( this.account);
    	console.log("valid: " + valid);
  	}
 
}