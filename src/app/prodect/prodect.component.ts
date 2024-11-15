import { Component,OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produits } from '../model/produits.model';

@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent implements OnInit {
  tab_pro:produits[];
  constructor(private studentServ : ProdectService) { 
    this.tab_pro = studentServ.listProdect();
   }

  ngOnInit(): void {
    
  }

}
