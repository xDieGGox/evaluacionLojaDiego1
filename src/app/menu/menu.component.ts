import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  pages = [
    {title: 'Nota', path: 'pages/nota'},
    {title: 'Lista de Notas', path:'pages/lista-notas'}, 
  ]

}
