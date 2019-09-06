import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable
    ({ providedIn: 'root' })

export class AuthenticationService {

    constructor(private router: Router, private http: HttpClient) {
    }

    login(username: string, password: string) {

        return this.http.post<any>('http://localhost:8080/traders/authenticate', { username, password })
            .pipe(map(user => {
                //              if (user && user.token)
                if (user) {
                    sessionStorage.setItem('authenticateUser', username);
                    localStorage.setItem('token', 'JWT');
                    this.isLoginSubject.next(true);
                }
                return user;
            }
            ));
    }

    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }

    logout(): void {
        sessionStorage.removeItem('authenticateUser');
        localStorage.removeItem('token');
        this.isLoginSubject.next(false);
        this.router.navigate(['/login']);
    }

    isUserLoggedIn(): boolean {
        let user = sessionStorage.getItem('authenticateUser');
        return !(user === null);
    }

    isLoggedIn(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }
    saveToken(token: string): string {
        localStorage.setItem('token', token);
        return token;
    }
}