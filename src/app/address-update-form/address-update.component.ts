import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {

  @Input()
  address: Address;
  private currUser : any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  updateAddress ( updateAddr ) {

    this.currUser = JSON.parse(localStorage.getItem('currentUser'));
    updateAddr.username = this.currUser.data.user_name;
    
    this.http.put<any>('http://54.221.8.236:3000/api/v1/address',updateAddr )
    .subscribe(
      result => {
        this.address = result;
        alert('Address updated successfully! Search again.') ;
        console.log(this.address);
      }, err => {
        alert('Error to update address - ' + err);
        console.log("Error occured");
      }
    );

  }

}
