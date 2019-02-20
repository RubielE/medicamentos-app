import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/usuario/login/login.component";
import { RegisterComponent } from "./components/usuario/register/register.component";
import { MedicamentosComponent } from "./components/medicamentos/medicamentos.component";
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { ListaOficialComponent } from './components/lista-oficial/lista-oficial.component';
import { ComercialGenericoComponent } from './components/comercial-generico/comercial-generico.component';
import { DetalleComponent } from './components/detalle/detalle.component';

import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EditarMedicamentoComponent } from './components/editar-medicamento/editar-medicamento.component';

//import {  } from 'rxjs';

const routes: Routes = [
  { path:  '', redirectTo:  'login', pathMatch:  'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'medicamento/nuevo', component: MedicamentoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'lista-oficial', component: ListaOficialComponent },
  { path: 'comercial-generico', component: ComercialGenericoComponent },
 // { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'editar-medicamento/:id', component: EditarMedicamentoComponent },

 // { path: '', component: UserEditComponent },
  { path: 'mis datos', component: UserEditComponent },
  //{ path: '**', component: UserEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'medicamentos' }
   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { useHash: true }
