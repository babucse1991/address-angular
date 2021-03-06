import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address';
import { environment } from './../../environments/environment';

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
    
    this.http.post<any>(environment.appUrl + '/api/v1/update-address',updateAddr )
    .subscribe(
      result => {
        this.address = result;
        alert('Address updated successfully!') ;
        console.log(this.address);
      }, err => {
        alert('Error to update address - ' + JSON.stringify(err));
        console.log(err);
      }
    );

  }

}
