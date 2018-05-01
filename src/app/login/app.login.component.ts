import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  user : any;
  private loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient
    ) { }
  
    ngOnInit() {
      this.authenticationService.logout();
        this.account = new Account();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
  
    onFormSubmit({ value, valid}: { value: Account, valid: boolean }) {
      

      this.account = value;
    	console.log( this.account);
    	console.log("valid: " + valid);

      
      
      this.http.post<any>('http://54.221.8.236:3000/api/v1/login', { userName: this.account.username, password: this.account.password })
      .subscribe(
        user => {
          console.log(user);
          if (user && (user.success == true) ) {
            localStorage.setItem('currentUser', JSON.stringify(user));
             this.router.navigate([this.returnUrl]);
         } else {
          alert('Error to login ' + JSON.stringify(this.user));
          console.log(JSON.stringify(this.user));
         }
        },
        err => {
          alert('Error to login - ' + err.error.data);
          console.log("Error occured");
        }
      );
        
    
      
     
  	}
 
}