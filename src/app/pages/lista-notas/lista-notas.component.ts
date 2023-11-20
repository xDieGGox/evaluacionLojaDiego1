import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent {
  notas:Nota[] = [];
  listaNotas :any;

  constructor(private router:Router, private notaFirebaseService: NotasFirebaseService){
    //this.notas = this.contactoService.getContactos();
    this.listaNotas = this.notaFirebaseService.getAll();// Aqui se recuperan las notas de firebase
  }


  
  goEditar(contacto: any){
      console.log(contacto);
      this.router.navigate(['pages/nota']);
  
      let params: NavigationExtras = {
        queryParams : {
          contacto: contacto
      }
      }
  }
}
