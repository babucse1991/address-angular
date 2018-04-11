import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from './../model/account';
 
@Component({
  selector: 'app-login-form',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class LoginComponent implements OnInit {
 

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