import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Sistema Automatizado de control y apertura de puertas';
  }

  ngOnInit() {
    console.log('!Componente inicio cargado¡');
  }

}
