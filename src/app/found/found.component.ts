import { Component,OnInit } from '@angular/core';
import { produits } from '../model/produits.model';
import { ProdectService } from '../services/prodect.service';
import { ingredients } from '../model/ingredients.model';


@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  tab_pro: produits[];
  list_grp: ingredients[];
  grpidRech: number=0;
  critere:string="nom";
  
  constructor(private studentServ:ProdectService) {
    this.tab_pro = studentServ.listProdect()
    this.list_grp=studentServ.listIngrs();
    }

    chercherParNom (name : string){
      this.tab_pro = this.studentServ.listProdect()
      this.tab_pro = this.tab_pro.filter(e => e.nom.toLowerCase().includes(name.toLocaleLowerCase()))
      }
      ngOnInit(){
        this.list_grp = this.studentServ.listIngrs()
      }
      chercherParGroupe (id : number){
        this.tab_pro = this.studentServ.listProdect()
        if(this.grpidRech!=0){
        this.tab_pro = this.tab_pro.filter(e => e.ing?.iding==id)}
        
      }
      rechercheParprix(prixe: string): void {
        const prixeNumber = parseFloat(prixe);
        this.tab_pro = this.studentServ.listProdect().filter(e => e.prix >=prixeNumber);
        
      }
      


}
