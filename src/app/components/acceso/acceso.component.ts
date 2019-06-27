import { Acceso } from './../../models/acceso';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalaService } from 'src/app/services/sala.service';
import { AccesoService } from 'src/app/services/acceso.service';
import { Sala } from 'src/app/models/sala';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css'],
  providers: [UserService, SalaService, AccesoService]
})
export class AccesoComponent implements OnInit {
  public token;

  constructor(private usuarioService: UserService, private salaService: SalaService, private accesoService: AccesoService) {
    this.token = this.usuarioService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente accesos cargado!');
    this.listarAccesos();
  }

  listarAccesos() {
    this.accesoService.listarAccesos(this.token)
    .subscribe(res => this.accesoService.accesos = res.permisos as Acceso[], error => console.log(<any>error));
  }
}
