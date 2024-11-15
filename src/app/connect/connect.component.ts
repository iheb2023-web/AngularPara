import { Component } from '@angular/core';
import { compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  user=new compte();
  erreur:boolean=false
  constructor(public authServ : AuthService, private router: Router) { }

  connected(){
    let permission: boolean = this.authServ.connect(this.user) 
    console.log("Tentative de connexion :" + permission);
    if (permission)
    this.router.navigate(['/dashboard']) 
    else
    this.erreur=true
    }

    reset() {
   this.erreur=false
    }
   

}
