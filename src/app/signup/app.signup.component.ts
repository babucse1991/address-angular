import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './../model/account';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-signup-form',
  templateUrl: './app.signup.component.html',
  styleUrls: ['./app.signup.component.css']
})
export class SignupComponent implements OnInit {
 

  private account:Account;
  returnUrl: string;
  roles: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) { }
  
    ngOnInit() {
        this.account = new Account();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
        this.roles = [{ name : 'Admin', val : 'Admin' },
        { name : 'Recipient', val : 'Recipient' }, { name : 'Agent', val : 'Agent' }];
    }
  
    onFormSubmit({ value, valid}: { value: Account, valid: boolean }) {
      
      this.router.navigate([this.returnUrl]);
      this.account = value;
    console.log( this.account);
    console.log("valid: " + valid);
      
      this.http.post<any>(environment.appUrl + '/api/v1/signup', this.account)
      .subscribe(
        user => {
          console.log(user);
          if (user && (user.success == true) ) {
            alert('Registration successfull. Please login! ' );
             this.router.navigate([this.returnUrl]);
         } else {
          alert('Error to sign up - ' + user);
         }
        },
        err => {
          alert('Error to sign up - ' + err.error.data);
          console.log("Error occured");
        }
      );

      
     
  	}
 
}