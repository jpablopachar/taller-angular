import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PermisosService } from 'src/app/services/permisos.service';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import { Rol } from 'src/app/models/rol';
import { PermisoRol } from 'src/app/models/permiso-rol';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
  providers: [PermisosService, RolService, UserService]
})
export class PermisoComponent implements OnInit {
  public token;
  public estado: string;

  constructor(private usuarioService: UserService, private rolService: RolService, private permisoService: PermisosService) {
    this.token = this.usuarioService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente permisos cargado!');
    this.listarPermisos();
    this.obtenerRoles();
  }

  obtenerRoles() {
    this.rolService.listarRoles(this.token)
    .subscribe(res => this.rolService.roles = res.roles as Rol[], error => console.log(<any>error));
  }

  listarPermisos() {
    this.permisoService.listarPermisos(this.token)
    .subscribe(res => this.permisoService.permisos = res.permisos as PermisoRol[], error => console.log(<any>error));
  }

  guardarPermiso(form: NgForm) {
    this.permisoService.guardarPermiso(this.token, form.value).subscribe((res) => {
      this.listarPermisos();
      form.reset();
    }, error => console.log(<any>error));
  }

  eliminarPermiso(idPermiso: string) {
    if (confirm('¿Estás seguro de eliminar esta sala?')) {
      this.permisoService.eliminarPermiso(this.token, idPermiso).subscribe(res => this.listarPermisos(), error => console.log(<any>error));
    }
  }
}
