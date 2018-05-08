import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Alias } from './../model/Alias';
import { environment } from './../../environments/environment';

@Component({
    selector: 'app-aliase',
    templateUrl: './aliase.component.html',
    styleUrls: ['./aliase.component.css']
  })

  export class AliaseComponent implements OnInit {

    private aliase : Alias = new Alias();
    private aliaseList : any;
    addressId: number;
    private sub: any;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
      ) {}

      ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.addressId = +params['addressId']; 
            this.getAliase ();
         });

      }

      addAliase (aliase) {
        aliase.addressId = this.addressId;
        this.http.post<any>(environment.appUrl + '/aliaseDomain/api/v1/aliase', aliase )
        .subscribe(
          result => {
            alert('Aliase added successfully!') ;
            this.aliase = new Alias();
            console.log(result);
            this.getAliase ();
          }, err => {
            alert('Error to post aliase');
            console.log(err);
          }
        );
      }

      getAliase () {
        this.http.get<any>(environment.appUrl + '/aliaseDomain/api/v1/aliase/'+this.addressId)
        .subscribe(
          result => {
            console.log(result);
            this.aliaseList = result;
            
          }, err => {
            alert('Error to get aliase');
            console.log(err);
          }
        );
      }

  }