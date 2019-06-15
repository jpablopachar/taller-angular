import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService, UserService]
})
export class RolComponent implements OnInit {
  public token;
  public opcionBoton: string;
  public estado: string;

  constructor(private userService: UserService, private rolService: RolService) {
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente rol cargado!');
    this.listarRoles();
  }

  listarRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.roles as Rol[], error => console.log(<any>error));
  }

  guardarRol(form: NgForm) {
    this.rolService.guardarRol(this.token, form.value).subscribe(res => console.log(res), error => console.log(<any>error));
  }

}
