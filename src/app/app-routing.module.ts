import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthModule } from './components/usuario/auth/auth.module';
// imports of usuario
import { LoginComponent } from "./components/usuario/login/login.component";
import { RegisterComponent } from "./components/usuario/register/register.component";
import { UserEditComponent } from "./components/usuario/user-edit/user-edit.component";
//imports of components
import { HomeComponent } from "./components/home/home.component";
import { MedicamentosComponent } from "./components/medicamentos/medicamentos.component";
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { ListaOficialComponent } from './components/lista-oficial/lista-oficial.component';
import { ComercialGenericoComponent } from './components/comercial-generico/comercial-generico.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarMedicamentoComponent } from './components/editar-medicamento/editar-medicamento.component';
import { MedicamentosListadoComponent} from './components/client/medicamentos-listado/medicamentos-listado.component';
import { AuthGuardService } from './services/auth-guard.service'

//import {  } from 'rxjs';

const routes: Routes = [
  { path:  '', redirectTo:  'login', pathMatch:  'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
//paths of usuario
{ path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-edit', component: UserEditComponent },
//paths of components
{ path: 'home', component: HomeComponent },
  { path: 'medicamentos', component: MedicamentosComponent, canActivate: [AuthGuardService] },
  { path: 'medicamento/nuevo', component: MedicamentoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'lista-oficial', component: ListaOficialComponent },
  { path: 'comercial-generico', component: ComercialGenericoComponent },
  { path: 'medicamentos-listado', component: MedicamentosListadoComponent },
 // { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'editar-medicamento/:id', component: EditarMedicamentoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
