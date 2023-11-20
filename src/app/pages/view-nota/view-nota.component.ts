import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/domain/nota';
import { NotasFirebaseService } from 'src/app/services/notas-firebase.service';

@Component({
  selector: 'app-view-nota',
  templateUrl: './view-nota.component.html',
  styleUrls: ['./view-nota.component.scss']
})
export class ViewNotaComponent {
  nota: Nota = new Nota();

  constructor(private router: Router, private route: ActivatedRoute, private contactosFirebaseService: NotasFirebaseService){
    this.route.params.subscribe(params =>{
      console.log(params);
      if(params['id']){
        this.loadNota(params['id']);
      }
    })
  }


  goAcercaDe(){
    console.log("LLamado de emergencia", this.nota); 
    this.router.navigate(['pages/nota']);
  }

  goListaContactos(){
    this.router.navigate(['pages/lista-notas']);
  }

  loadNota(uid: string){
    this.contactosFirebaseService.getPersona(uid).subscribe(data =>{
      console.log(data);
      this.nota =<any> data;
    })
  }

}
