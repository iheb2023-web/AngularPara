import { Component, OnInit } from '@angular/core';
import { ProdectService } from '../services/prodect.service';
import { produits } from '../model/produits.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  tab_pro : produits[];
  constructor(private studentServ : ProdectService) { 
   this.tab_pro = studentServ.listProdect();
  }
  
 ngOnInit(): void {
   
 }
}
