import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public usuarioSeleccionado: User;
  public usuarios: User[];
  public identidad;
  public token;

  constructor(public http: HttpClient) {
    this.usuarioSeleccionado = new User();
    this.url = Global.url;
  }

  iniciarSesion(usuario, token = null): Observable<any> {
    if (token != null) {
      usuario.token = token;
    }

    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'login', params, {headers});
  }

  obtenerIdentidad() {
    const identidad = JSON.parse(localStorage.getItem('identidad'));

    if (identidad !== 'undefined') {
      this.identidad = identidad;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

  obtenerToken() {
    const token = localStorage.getItem('token');

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  registrarUsuario(token, usuario: User): Observable<any> {
    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.post(this.url + 'usuario', params, {headers});
  }

  listarUsuarios(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.get(this.url + 'usuario', {headers});
  }

  actualizarUsuario(token, usuario: User): Observable<any> {
    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.put(this.url + `usuario/${usuario._id}`, params, {headers});
  }

  eliminarUsuario(token, idUsuario: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.delete(this.url + `usuario/${idUsuario}`, {headers});
  }
}
