import { ingredients } from "./ingredients.model"

export class produits{
       id!: number
       nom!: string
       description!: string
       prix!: number
       utilisation!: string
       img!:string
       ing?: ingredients
   
  }