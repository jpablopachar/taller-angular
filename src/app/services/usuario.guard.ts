import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UsuarioGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    const identidad = this.userService.obtenerIdentidad();

    if (identidad && identidad.rol === '5c9e85a3e850a10017df4ec9') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
