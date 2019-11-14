import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UsuarioGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    const identidad = this.userService.obtenerIdentidad();

    if (identidad.rol === '5dcdb015e069b80d65dcddb8') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
