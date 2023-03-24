import { Component, Input } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.sass']
})
export class AuthorizedComponent {

  constructor(private _securityService: SecurityService){

  }

  @Input()
  rol: string;



  isAuthorized(): boolean{
    if(this.rol){
      return this._securityService.getRol() === this.rol;
    }else{
      return this._securityService.isLogged();
    }
    
  }
}
