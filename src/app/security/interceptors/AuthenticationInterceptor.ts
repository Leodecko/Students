import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { SecurityService } from '../security.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private securityService: SecurityService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    // Obtener el token de acceso de localStorage
    const authToken = this.securityService.getToken();

    // Clonar la solicitud original y agregar un encabezado de autorización
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });

    // Continuar con la solicitud original con la nueva solicitud clonada
    return next.handle(authReq);
  }
}