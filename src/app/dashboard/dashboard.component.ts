import { Component } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbPro?:number
  nbIng?:number
  nbUsers:number=0
  avgPrix:number=0
  isToggled = false;


  constructor(private prodectServ : ProdectService, private authServ: AuthService) { 
    this.nbPro = this.prodectServ.getNbProdect()
    this.nbIng = this.prodectServ.getNbIngredient();
    this.nbUsers=this.authServ.calculNbUsers();
    this.avgPrix=this.prodectServ.getAvgPrix();
    
    
  }   
  


}
