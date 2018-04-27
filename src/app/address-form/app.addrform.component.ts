import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './../model/address';
 
@Component({
  selector: 'app-address-form',
  templateUrl: './app.addrform.component.html',
  styleUrls: ['./app.addrform.component.css']
})
export class AddressFormComponent implements OnInit {
 

  private address:Address;
  private currUser : any;
  constructor(
    private http: HttpClient
  ) { }
  
    ngOnInit() {
        this.address = new Address();
    }
  
    onFormSubmit({ value, valid}: { value: Address, valid: boolean }) {
      this.address = value;
      this.currUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.currUser);
      this.address.username = this.currUser.data.user_name;
    	console.log( this.address);
      console.log("valid: " + valid);
      
      this.http.post<any>('http://localhost:3000/api/v1/address', this.address)
      .subscribe(
        user => {
          console.log(user);
          if (user && (user.success == true) ) {
            alert('Your address successfully!' );
             
         } else {
          alert('Error to save address - ' + user);
         }
        },
        err => {
          alert('Error to save address - ' + err.error.data);
          console.log("Error occured");
        }
      );
  	}
 
}