import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroment } from 'src/enviroments/enviroments';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NotaComponent } from './pages/nota/nota.component';
import { MenuComponent } from './menu/menu.component';
import { ListaNotasComponent } from './pages/lista-notas/lista-notas.component';
import { ViewNotaComponent } from './pages/view-nota/view-nota.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    MenuComponent,
    ListaNotasComponent,
    ViewNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //provideFirebaseApp(() => initializeApp({"projectId":"evaluacionlojadiego","appId":"1:851822395896:web:29ea4c81017f5272b9160d","storageBucket":"evaluacionlojadiego.appspot.com","apiKey":"AIzaSyAePW_3pSIGZ7_MhRTpRMVzlOXY7tHcZ5g","authDomain":"evaluacionlojadiego.firebaseapp.com","messagingSenderId":"851822395896","measurementId":"G-EZS4S8FCFK"})),
    //provideFirestore(() => getFirestore())
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)), //Con este ponemos lo que esta comnetado en la linea de arriba pero desde otro arcvhivo
    provideFirestore(() => getFirestore())
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: enviroment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
