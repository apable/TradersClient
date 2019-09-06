import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Grains } from '../models/grains';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrainsStoreService {

  constructor(private http: HttpClient) { }

  public saveGrains(grains: Grains) {
    return this.http.post<Grains>('http://localhost:8080/grains', grains);
  }
  public getGrains(): Observable<Grains[]> {
    return this.http.get<Grains[]>('http://localhost:8080/grains');
  }
  public getGrainsByName(grainName: string): Observable<Grains[]> {
    return this.http.get<any>('http://localhost:8080/grainsByName', { params: new HttpParams().set('grainName', grainName) });
  }
}
