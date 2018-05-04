import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './../model/address';
import { User } from './../model/user';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-my-address-list',
    templateUrl: './my-address-list.component.html',
    styleUrls: ['./my-address-list.component.css']
  })

  export class MyAddressListComponent implements OnInit {
    
      address : any;
      search : User;      
      selectAddr : any
      private currUser : any;
      private role : String;
      private searchCatagory : any = {};

      constructor(
          private http: HttpClient
        ) {}
    
      ngOnInit() {
        this.search = new User();
        this.currUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currUser);
        this.role = this.currUser.data.account;
        this.searchAddress();
      }
    
      searchAddress (  ) {  
        
        this.searchCatagory.userName = this.currUser.data.user_name;
        this.http.post<any>(environment.appUrl + '/api/v1/address-search',this.searchCatagory )
        .subscribe(
          result => {
            this.address = result;
            console.log(this.address);
          }, err => {
            alert('Error to get address - ' + err.error.data);
            console.log(err);
          }
        );

      }

      onSelect ( selectedObj ) {
        this.selectAddr = Object.assign({}, selectedObj);
        console.log(this.selectAddr);
      }
       
    
    }