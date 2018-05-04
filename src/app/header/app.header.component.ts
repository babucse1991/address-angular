import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
  <nav class="navbar navbar-light bg-faded">
    <a class="navbar-brand" href="#">Address App</a>
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#search">Vehical</a>
      </li>
      <li class="nav-item" *ngIf="role == 'Admin' || role == 'Agent'">
        <a class="nav-link" href="#searchAdr">Search Address</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#myAddress">My Address</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Log out</a>
    </li>
    </ul>
  </nav>
   `
  })
  export class HeaderComponent {

    private currUser : any;
    private role : String;

    constructor() {}

    ngOnInit() {
      this.currUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.currUser);
      this.role = this.currUser.data.account;
    }
  }
  