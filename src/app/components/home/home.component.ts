import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';

import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from "rxjs";

import { Location } from "@angular/common";



@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
	isLoggedIn: Observable<boolean>;

	constructor(public authenticationService: AuthenticationService, private location: Location) {
		this.isLoggedIn = authenticationService.isLoggedIn();
	}

	ngOnInit() {
		let currentUrl = window.location.href;
		let tmpVar = currentUrl.includes('/home');
		if (currentUrl.includes('/home')) {
			window.onpopstate = function (event) {
				history.go(1);
			}
		}
	}
}
