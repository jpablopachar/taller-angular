import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acceso } from '../models/acceso';
import { UserService } from './user.service';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  public url: string;
  public accesos: Acceso[];

  constructor(public http: HttpClient, userService: UserService) {
    this.url = Global.url;
  }

  listarAccesos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.get(this.url + 'acceso', {headers});
  }
}
