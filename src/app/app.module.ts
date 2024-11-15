import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { PageUpdateComponent } from './page-update/page-update.component';
import { InsertComponent } from './insert/insert.component';
import { FoundComponent } from './found/found.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdectComponent } from './prodect/prodect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {HttpClientModule} from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListeProduitsComponent,
    DeleteComponent,
    UpdateComponent,
    PageUpdateComponent,
    InsertComponent,
    FoundComponent,
    ConnectComponent,
    DashboardComponent,
    ProdectComponent,
    ForbiddenComponent,
    ConnectHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
