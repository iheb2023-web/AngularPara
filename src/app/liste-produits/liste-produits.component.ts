import { Component,OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produits } from '../model/produits.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit{
  tab_pro : produits[];
 constructor(private studentServ : ProdectService, public authServ : AuthService) { 
  this.tab_pro = studentServ.listProdect();
 }
 suppEtudiant (p : produits) {
  let rep = confirm("Etes-vous sûr de vouloir supprimer ce Produits ? "+p.nom);
  if (rep) {
  this.studentServ.delProdect(p);
  console.log("Suppression avec succes :"+p.nom)
  }
  }
 ngOnInit(): void {
}
}
