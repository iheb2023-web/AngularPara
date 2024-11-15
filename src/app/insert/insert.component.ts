import { Component,OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produits } from '../model/produits.model';
import { Router } from '@angular/router';
import { ingredients } from '../model/ingredients.model';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  newproduit= new produits();
  newingredient=new ingredients();
  ings!: ingredients[];
  newid!:number;
 constructor(private studentServ : ProdectService,private rout : Router) { }

  ajouterEtudiant() {
    const newIngredient = this.studentServ.viewingr(this.newid);

    if (newIngredient) {
      this.newproduit.ing = newIngredient;
      this.studentServ.addProdect(this.newproduit);
      console.log('Produit ajouté dans le composant :', this.newproduit);
      this.rout.navigate(['admin/liste']);
    } else {
      console.error("Erreur : Ingrédient non trouvé pour l'ID ", this.newid);
    }
  }

  ngOnInit(): void {
    this.ings = this.studentServ.listIngrs();
  }
}

