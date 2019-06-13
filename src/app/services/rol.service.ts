import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { UserService } from './user.service';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  public url: string;
  public rolSeleccionado: Rol;
  public roles: Rol[];

  constructor(public http: HttpClient, userService: UserService) {
    this.url = Global.url;
    this.rolSeleccionado = new Rol();
  }
}
