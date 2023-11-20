import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { Nota } from '../domain/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasFirebaseService {
  private path = '/notas' //El nombre que se le pone aqui, es el nombre de la coleccion en firebase
  notasRef: AngularFirestoreCollection<any>
  constructor(private db: AngularFirestore) { 
    this.notasRef = db.collection(this.path)

    this.notasRef.valueChanges().subscribe(data =>{
      console.log(data)
    })
  }

  getAll(){
    return this.notasRef.valueChanges()
  }

  save(nota: Nota){
    const uid = this.db.createId();
    nota.uid=uid;
    nota.titulo=nota.titulo;
    return this.notasRef.doc(uid).set(Object.assign({},nota));
  }

  getPersona(uid: string){
    return this.db.doc(this.path+'/'+uid).valueChanges();
    
  }
}
