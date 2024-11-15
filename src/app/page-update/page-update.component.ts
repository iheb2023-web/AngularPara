import { Component } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produits } from '../model/produits.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ingredients } from '../model/ingredients.model';


@Component({
  selector: 'app-page-update',
  templateUrl: './page-update.component.html',
  styleUrls: ['./page-update.component.css']
})
export class PageUpdateComponent {
  produitsCourant= new produits();
  idMod!:Number;
  ings!: ingredients[];
  constructor(private actRoute:ActivatedRoute, private rout:Router, private prodectServ: ProdectService)  {}

modifproduit () {
    this.produitsCourant.ing=this.prodectServ.viewingr(Number(this.idMod))
     this.prodectServ.editProdect(this.produitsCourant)
     console.log ("Succès de modification  " +
    this.produitsCourant.id + " - " + this.produitsCourant.nom + " - " +this.produitsCourant.description + " - " + this.produitsCourant.prix + " - " + this.produitsCourant.utilisation)
    this.rout.navigate(["admin/liste"]);
    }
    
    ngOnInit(): void {
      this.ings = this.prodectServ.listIngrs()
      this.produitsCourant=this.prodectServ.viewProdect(this.actRoute.snapshot.params['id'])
      console.log("produit modifier "+this.produitsCourant.id)
      this.idMod = this.produitsCourant.ing!.iding;
     }

}
