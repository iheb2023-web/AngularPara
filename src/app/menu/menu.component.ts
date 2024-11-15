import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
    closeOffcanvas() {
      console.log('Fermeture de l\'offcanvas');
    }
    constructor(public authService :AuthService) {}
    ngOnInit(): void {
      
    }

}
