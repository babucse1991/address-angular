import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Account } from './../model/account';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
  })

  export class AccountComponent implements OnInit {

    private account : Account = new Account();
    private accountList : any;
    private addEdit : boolean = false;
    aliaseId: number;
    private sub: any;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
      ) {}

      ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.aliaseId = +params['aliaseId']; 
            this.getAccount ();
         });

      }

      addAccount (account) {
        account.aliceId = this.aliaseId;
        this.http.post<any>(environment.appUrl + '/aliaseDomain/api/v1/account', account )
        .subscribe(
          result => {
            alert('Account added successfully!') ;
            this.account  = new Account();
            this.getAccount();
            console.log(result);
          }, err => {
            alert('Error to post aliase');
            console.log(err);
          }
        );
      }

      getAccount () {
        this.http.get<any>(environment.appUrl + '/aliaseDomain/api/v1/account/'+this.aliaseId)
        .subscribe(
          result => {
            console.log(result);
            this.accountList = result;
          }, err => {
            alert('Error to get account');
            console.log(err);
          }
        );
      }

      clearFields () {
        this.account = new Account();
        this.addEdit = false;
      }

      onSelect (account) {
        this.account.domain = account.domain_name;
        this.account.email = account.email;
        this.account.password = account.domain_password;
        this.account.username = account.domain_user_name;
        this.account.id = account.account_id;
        this.addEdit = true;
      }

      updateAccount(account) {
        this.http.post<any>(environment.appUrl + '/aliaseDomain/api/v1/update-account', account )
        .subscribe(
          result => {
            alert('Account updated successfully!') ;
            this.account = new Account();
            console.log(result);
            this.getAccount();
            this.addEdit = false;
          }, err => {
            alert('Error to post Account');
            console.log(err);
          }
        );
      }

  }