import { Injectable,OnInit } from '@angular/core';
import { produits } from '../model/produits.model';
import { ingredients } from '../model/ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class ProdectService implements OnInit {

    tab_pro : produits[];
    tab_ing : ingredients[];
 constructor() { 
 this.tab_pro = [
 { id:111, nom:"AlgoFer", description:"contient vitamine c", prix:15, utilisation:"deux fois par jour",img:"p1",ing:{ iding:1, noming:"Acide hyaluronique", origine:"Synthétique ou extrait de la crête de coq",quantite:5}},
 { id:222, nom:"Tetrab", description:"vitamine", prix:20, utilisation :"trois fois par jour",img:"p2",ing:{ iding:2, noming:"Vitamine C", origine:"Naturelle",quantite: 8}},
 { id:333, nom:"Vital", description:"vitamine A", prix:18,utilisation :"une fois par jour",img:"p3", ing:{ iding:3, noming:"Rétinol",origine:"Synthétique, dérivé de la vitamine A",quantite: 8}},
 { id:444, nom:"Globin", description:"pour cheveux", prix:25, utilisation:"une fois par semaine",img:"p4",ing:{ iding:4, noming:"Aloe vera", origine:"Naturelle",quantite: 10}},
  { 
    id: 555,
    nom: "Paracetamol",
    description: "Analgesic and antipyretic",
    prix: 8.99,
    utilisation: "Take as directed by a healthcare professional",
    img: "p5",
    ing: { iding: 1, noming: "Acide hyaluronique", origine: "Synthétique ou extrait de la crête de coq", quantite: 6 }
  },
  { 
    id: 666,
    nom: "Bepanthen",
    description: "Ointment for skin care",
    prix: 12.50,
    utilisation: "Apply to affected area as needed",
    img: "p6",
    ing: { iding: 2, noming: "Vitamine C", origine: "Naturelle", quantite: 8 }
  },
  { 
    id: 777,
    nom: "Omega-3 Capsules",
    description: "Dietary supplement for heart health",
    prix: 24.99,
    utilisation: "Take one capsule daily with food",
    img: "p7",
    ing: { iding: 3, noming: "Rétinol", origine: "Synthétique, dérivé de la vitamine A", quantite: 15 }
  },
  { 
    id: 888,
    nom: "Allergy Relief",
    description: "Antihistamine for allergy relief",
    prix: 18.75,
    utilisation: "Take as directed for allergy symptoms",
    img: "p8",
    ing: { iding: 4, noming: "Aloe vera", origine: "Gel extrait des feuilles de la plante d'aloès", quantite: 8 }
  }

 ]
 this.tab_ing = [
  { iding:1, noming:"Acide hyaluronique", origine:"Synthétique ou extrait de la crête de coq",quantite: 6},
  { iding:2, noming:"Vitamine C", origine:"Naturelle",quantite: 8},
  { iding:3, noming:"Rétinol", origine:"Synthétique, dérivé de la vitamine A",quantite: 15},
  { iding:4, noming:"Aloe vera", origine:"Gel extrait des feuilles de la plante d'aloès",quantite: 8},
  { iding:5, noming:"Allantoïne", origine:"Synthétique ou extraite de la consoude",quantite: 10}
  ]
 }
 listProdect(){
  return this.tab_pro;
 }
 listIngrs(){
  return this.tab_ing;
 }

 addProdect(p1: produits){
  this.tab_pro.push(p1);
  console.log(this.tab_pro);
  console.log('Produit ajouté au service :', p1);

 }

 delProdect(p1: produits){
  let pos=this.tab_pro.indexOf(p1);
  if(pos>=0){
    this.tab_pro.splice(pos,1);
  }

 }
 viewProdect (num : number) : produits {
  return this.tab_pro.find(p => p.id==num)!
 }

 viewingr(num: number): ingredients {
  return this.tab_ing.find(g => g.iding == num)!;
 }

  editProdect(p1: produits){
    this.delProdect(p1);
    this.addProdect(p1);
  }
  getNbProdect(){
    return this.tab_pro.length;
  }
  getNbIngredient(){
    return this.tab_ing.length;

  }
  getAvgPrix() {
    var sum = 0;
    this.tab_pro.forEach((pro) => {
        sum += pro.prix; 
    });

    var avg = sum / this.tab_pro.length;
    return avg;
}
  
  
 ngOnInit(): void {
 }
  }

