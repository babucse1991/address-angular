import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })
  export class ProfileComponent implements OnInit {
  
    userNames : any;
    refferalNames : any;
    currUser : any;
    newRefferId : String;
    constructor( private http: HttpClient ) {
      setTimeout(()=>{ 
        this.getAllUserIds();    
      },3000);

     }
      
    ngOnInit() {
        this.currUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currUser = this.currUser.data;
        console.log(this.currUser);
        this.getRefferedByUser();
        
    }



    getRefferedByUser() {
        this.http.get<any>(environment.appUrl + '/api/v1/refferal-list/'+this.currUser.user_name )
        .subscribe(
          resp => {
            console.log(resp);
            this.refferalNames = resp;
            
          },
          err => {
            alert('Error to get usrs - ' );
            console.log(err);
          }
        );
    }

    getAllUserIds() {
        this.http.get<any>(environment.appUrl + '/api/v1/user-list')
        .subscribe(
          resp => {
            console.log(resp);
            this.userNames = resp;
          },
          err => {
            alert('Error to get usrs - ' );
            console.log(err);
          }
        );
    }
    saveNewReferrer( newRefferId ) {
        
        this.http.post<any>(environment.appUrl + '/api/v1/new-referer', 
        { newRefferId : newRefferId, userId : this.currUser.user_name })
        .subscribe(
          resp => {
            console.log(resp);
            if (resp && (resp.success == true) ) {
                alert('You have reffered new user!' );
                this.getRefferedByUser();
             } else {
              alert('Error to save address - ' + resp);
             }
          },
          err => {
            alert('Error to get usrs - ' );
            console.log(err);
          }
        );
    }    

  }