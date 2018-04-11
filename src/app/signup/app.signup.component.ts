import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from './../model/account';
 
@Component({
  selector: 'app-signup-form',
  templateUrl: './app.signup.component.html',
  styleUrls: ['./app.signup.component.css']
})
export class SignupComponent implements OnInit {
 

  private account:Account;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }
  
    ngOnInit() {
        this.account = new Account();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
  
    onFormSubmit({ value, valid}: { value: Account, valid: boolean }) {
        this.router.navigate([this.returnUrl]);
        this.account = value;
    	console.log( this.account);
    	console.log("valid: " + valid);
  	}
 
}