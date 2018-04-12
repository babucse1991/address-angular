import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Account } from './../model/account';
import { AuthenticationService } from '../service/app.authendication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class LoginComponent implements OnInit {
 

  private account:Account;
  returnUrl: string;
  private loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }
  
    ngOnInit() {
      this.authenticationService.logout();
        this.account = new Account();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
  
    onFormSubmit({ value, valid}: { value: Account, valid: boolean }) {
      
      var token =  this.authenticationService.login(this.account.username, this.account.password).token;
      if ( token == 'dom') {
        this.router.navigate([this.returnUrl]);
      } else {
        alert('Error to login');
        console.log(JSON.stringify(token));
      }
      
      this.account = value;
    	console.log( this.account);
    	console.log("valid: " + valid);
  	}
 
}