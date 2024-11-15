import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { PageUpdateComponent } from './page-update/page-update.component';
import { InsertComponent } from './insert/insert.component';
import { produits } from './model/produits.model';
import { FoundComponent } from './found/found.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProdectComponent } from './prodect/prodect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { articletGuard } from './guard/article.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';

const routes: Routes = [
  {path:"liste", component:ListeProduitsComponent },
  {path: "admin/delete", component: DeleteComponent, canActivate:[articletGuard]},
  {path: "home", component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: "admin/update/Pageupdate/:id", component: PageUpdateComponent, canActivate:[articletGuard]},
  {path: "admin/update", component: UpdateComponent, canActivate:[articletGuard]},
  {path:"admin/ajouter", component: InsertComponent, canActivate:[articletGuard]},
  {path: "chercher", component: FoundComponent},
  //{path: "connecter",component: ConnectComponent},
  {path:"connecter",component: ConnectComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:'prodect',component:ProdectComponent},
  {path:"forbidden",component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
