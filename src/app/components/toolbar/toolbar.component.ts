import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  constructor(public securityService: SecurityService,
    private router: Router){

  }

  logOut(){
    this.securityService.logOut();
    this.router.navigate(['login']);
  }
  
}
