import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public identidad: string;
  public titulo: string;
  public url: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.titulo = 'SACP-UTPL';
    this.url = Global.url;
  }

  ngOnInit() {
    this.identidad = this.userService.obtenerIdentidad();
    console.log(this.identidad);
  }

  ngDoCheck() {
    this.identidad = this.userService.obtenerIdentidad();
  }

  cerrarSesion() {
    localStorage.clear();

    this.identidad = null;

    this.router.navigate(['/login']);
  }
}
