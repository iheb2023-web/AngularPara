import { Component,OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produits } from '../model/produits.model';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  tab_pro : produits[];
  constructor(private studentServ : ProdectService) { 
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


