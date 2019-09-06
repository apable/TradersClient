import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {  AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLoggedIn : Observable<boolean>;

	user :User ;
    constructor( private router : Router  , private authenticationService :AuthenticationService) {
	  this.user = new User();
	  this.isLoggedIn = authenticationService.isLoggedIn();
  }

  ngOnInit() {
  }

  login(){
	
	this.authenticationService.login( this.user.username , this.user.password ).subscribe (
			data =>{
				this.router.navigate(['/home']);
			},
			error =>{
				// only for test , remove after use 
				// this.router.navigate(['/home']);

				alert(JSON.stringify(error.error));
			}
	  );
	}
}
