import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public titulo: string;
  public usuario: User;
  public estado: string;
  public identidad;
  public token;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UserService) {
    this.titulo = 'Iniciar sesión';
    this.usuario = new User();
  }

  ngOnInit() {
    console.log('¡Componente iniciar-sesion cargado!');
  }

  iniciarSesion(form: NgForm) {
    this.usuarioService.iniciarSesion(this.usuario).subscribe(res => console.log(res), error => console.log(<any>error));
  }

  obtenerToken() {
    this.usuarioService.iniciarSesion(this.usuario, 'true').subscribe(res => console.log(res), error => console.log(<any>error));
  }

}
