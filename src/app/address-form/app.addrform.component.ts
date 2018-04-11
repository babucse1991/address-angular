import { Component, OnInit, Input } from '@angular/core';
import { Address } from './../model/address';
 
@Component({
  selector: 'app-address-form',
  templateUrl: './app.addrform.component.html',
  styleUrls: ['./app.addrform.component.css']
})
export class AddressFormComponent implements OnInit {
 

  private address:Address;
 
  constructor() { }
  
    ngOnInit() {
        this.address = new Address();
    }
  
    onFormSubmit({ value, valid}: { value: Address, valid: boolean }) {
    	this.address = value;
    	console.log( this.address);
    	console.log("valid: " + valid);
  	}
 
}