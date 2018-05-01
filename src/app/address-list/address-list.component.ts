import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './../model/address';
import { User } from './../model/user';


@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.css']
  })

  export class AddressListComponent implements OnInit {
    
      address : any;
      search : User;      
      selectAddr : any

      constructor(
          private http: HttpClient
        ) {}
    
      ngOnInit() {
        this.search = new User();
      }
    
      searchAddress ( searchCatagory ) {  

        
        this.http.post<any>('http://localhost:3000/api/v1/address-search',searchCatagory )
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