import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaComponent } from './pages/nota/nota.component';
import { ViewNotaComponent } from './pages/view-nota/view-nota.component';
import { ListaNotasComponent } from './pages/lista-notas/lista-notas.component';

const routes: Routes = [
  {path:"pages/nota",component:NotaComponent},
  {path:"pages/nota/:id",component:ViewNotaComponent},
  {path:"pages/lista-notas",component:ListaNotasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
