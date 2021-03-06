import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {Observable} from 'rxjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddressFormComponent } from './address-form/app.addrform.component';
import { AddressUpdateComponent } from './address-update-form/address-update.component';
import { SignupComponent } from './signup/app.signup.component';
import { LoginComponent } from './login/app.login.component';
import { HeaderComponent } from './header/app.header.component';
import { AddressListComponent } from './address-list/address-list.component';
import { MyAddressListComponent } from './my-address/my-address-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AliaseComponent } from './aliase/aliase.component';
import { AccountComponent } from './account/account.component';
import { LocationMapComponent } from './loc-map/app.location-map.component';
import { AuthGuard } from './authQuards/app.auth.guards';
import { AuthenticationService } from './service/app.authendication.service';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: AddressFormComponent, canActivate: [AuthGuard] },
  {path: 'search', component: VehicleListComponent, canActivate: [AuthGuard] },
  {path: 'searchAdr', component: AddressListComponent, canActivate: [AuthGuard] },
  {path: 'myAddress', component: MyAddressListComponent, canActivate: [AuthGuard] },
  {path: 'aliase/:addressId', component: AliaseComponent, canActivate: [AuthGuard] },
  {path: 'account/:aliaseId', component: AccountComponent, canActivate: [AuthGuard] },
  {path: 'location-map', component: LocationMapComponent, canActivate: [AuthGuard] },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    AddressFormComponent,
    AddressUpdateComponent,
    HeaderComponent,
    AddressListComponent,
    MyAddressListComponent,
    ProfileComponent,
    AliaseComponent,
    AccountComponent,
    LocationMapComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


