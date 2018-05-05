import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './../model/address';
import { User } from './../model/user';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.css']
  })

  export class AddressListComponent implements OnInit {
    
      address : any;
      search : User;      
      selectAddr : any
      private currUser : any;
      private role : String;
      private searchApi : String;

      constructor(
          private http: HttpClient
        ) {}
    
      ngOnInit() {
        this.search = new User();
        this.currUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currUser);
        this.role = this.currUser.data.account;
      }
    
      searchAddress ( searchCatagory ) {  

        this.searchApi = '/api/v1/address-search';
        if ( this.role == 'Agent') {
          this.searchApi = '/api/v1/agent-address-search';
          searchCatagory.agentUserName = this.currUser.data.user_name;
        }
        
        this.http.post<any>(environment.appUrl + this.searchApi, searchCatagory )
        .subscribe(
          result => {
            this.address = result;
            console.log(this.address);
          }, err => {
            alert('Error to get address - ' + err.error.data);
            console.log("Error occured");
          }
        );

      }

      onSelect ( selectedObj ) {
        this.selectAddr = Object.assign({}, selectedObj);
        console.log(this.selectAddr);
      }
       
    
    }