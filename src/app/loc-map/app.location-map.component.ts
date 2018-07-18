import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-location-map-form',
  templateUrl: './app.location-map.component.html',
  styleUrls: ['./app.location-map.component.css']
})
export class LocationMapComponent implements OnInit {
 

  private currUser : any;
  constructor(
    private http: HttpClient
  ) { }
  
    ngOnInit() {
        
    }
  
    
 
}