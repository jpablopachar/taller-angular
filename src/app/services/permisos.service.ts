import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermisoRol } from '../models/permiso-rol';
import { UserService } from './user.service';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  public url: string;
  public permisoRolSeleccionado: PermisoRol;
  public permisos: PermisoRol[];

  constructor(public http: HttpClient, userService: UserService) {
    this.url = Global.url;
    this.permisoRolSeleccionado = new PermisoRol();
  }

  listarPermisos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.get(this.url + 'permiso', {headers});
  }

  guardarPermiso(token, permiso: PermisoRol): Observable<any> {
    const params = JSON.stringify(permiso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.post(this.url + 'permiso', params, {headers});
  }

  eliminarPermiso(token, idPermiso): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.delete(`${this.url}permiso/${idPermiso}`, {headers});
  }
}
