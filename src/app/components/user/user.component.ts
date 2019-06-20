import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, RolService]
})
export class UserComponent implements OnInit {
  public token;
  public estado: string;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UserService, private rolService: RolService) {
    this.token = this.usuarioService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente usuario cargado!');
    this.obtenerRoles();
    this.obtenerUsuarios();
  }

  obtenerRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.roles, error => console.log(<any>error));
  }

  obtenerUsuarios() {
    this.usuarioService.listarUsuarios(this.token).subscribe(res => this.usuarioService.usuarios = res.usuarios,
      error => console.log(<any>error));
  }

  guardarUsuario(form: NgForm) {
    this.usuarioService.registrarUsuario(this.token, form.value).subscribe((res) => {
      this.obtenerUsuarios();
      form.reset();
    }, error => console.log(<any>error));
  }
}
