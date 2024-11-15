import { Injectable } from '@angular/core';
import { compte } from '../model/compte.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:compte[]=[
    {nom:"Agent",email:"agent@gmail.com",mot2pass:"agent123",role:"Agent"},
    {nom:"Admin",email:"admin@gmail.com",mot2pass:"admin123",role:"ADMIN"}

  ]
  userCourant:string=""
  roleCourant:string=""
  isConnected:boolean=false

  constructor(private router: Router) { }


  connect(user : compte) : boolean {
    this.users.forEach((unUser) => {
    if(user.email == unUser.email && user.mot2pass == unUser.mot2pass ) { 
    this.isConnected = true
    this.userCourant = unUser.nom
    this.roleCourant = unUser.role;
    console.log("Connexion de ", this.userCourant, " - role :", this.roleCourant)
    localStorage.setItem('userCourant',this.userCourant);
    localStorage.setItem('isConnected',JSON.stringify(this.isConnected));
    }
    });

    return this.isConnected
    }


    disconnect() {
    this.isConnected = false
    this.userCourant = ""
    this.roleCourant=""
    this.router.navigate(['/connecter'])
    localStorage.removeItem('userCourant')
    localStorage.removeItem('isconnected')
    }


    testerAdmin():boolean{
    return this.roleCourant == "ADMIN"
    
   }
    calculNbUsers (){
    return this.users.length; 
    }
   
}
