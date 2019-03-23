import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthModule } from './components/usuario/auth/auth.module';
// imports of usuario
import { LoginComponent } from "./components/usuario/login/login.component";
import { RegisterComponent } from "./components/usuario/register/register.component";
import { UserEditComponent } from "./components/usuario/user-edit/user-edit.component";
//imports of components
import { HomeComponent } from "./components/home/home.component";
import { AdministrarhomeComponent } from "./components/admin/administrarhome/administrarhome.component";
import { MedicamentosComponent } from "./components/admin/listadoadmin/medicamentos/medicamentos.component";
import { MedicamentoComponent } from './components/admin/addforms/medicamento/medicamento.component';
import { ListaOficialComponent } from './components/client/lista-oficial/lista-oficial.component';
import { ComercialGenericoComponent } from './components/client/comercial-generico/comercial-generico.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarMedicamentoComponent } from './components/admin/editforms/editar-medicamento/editar-medicamento.component';
import { MedicamentosListadoComponent} from './components/client/medicamentos-listado/medicamentos-listado.component';
import { AuthGuardService } from './services/auth-guard.service'
// imports components of complejo
import { HematologiaListadoComponent } from './components/client/hematologia-listado/hematologia-listado.component';
import { InmunoquimicaListadoComponent } from './components/client/inmunoquimica-listado/inmunoquimica-listado.component';
import { PerfilesComponent } from './components/client/perfiles/perfiles.component';
import { QuimicaListadoComponent } from './components/client/quimica-listado/quimica-listado.component';
import { SerologiaListadoComponent } from './components/client/serologia-listado/serologia-listado.component';
import { ParasitologiaListadoComponent } from './components/client/parasitologia-listado/parasitologia-listado.component';
import { InmunologiaListadoComponent } from './components/client/inmunologia-listado/inmunologia-listado.component';
import { LabgeneticaListadoComponent } from './components/client/labgenetica-listado/labgenetica-listado.component';
import { LabhematologiaListadoComponent } from './components/client/labhematologia-listado/labhematologia-listado.component';
import { NatListadoComponent } from './components/client/nat-listado/nat-listado.component';
import { HematologiaCrearComponent } from './components/admin/addforms/hematologia-crear/hematologia-crear.component';
import { InmunoquimicaCrearComponent } from './components/admin/addforms/inmunoquimica-crear/inmunoquimica-crear.component';
import { QuimicaCrearComponent } from './components/admin/addforms/quimica-crear/quimica-crear.component';
import { SerologiaCrearComponent } from './components/admin/addforms/serologia-crear/serologia-crear.component';
import { ParasitologiaCrearComponent } from './components/admin/addforms/parasitologia-crear/parasitologia-crear.component';
import { InmunologiaCrearComponent } from './components/admin/addforms/inmunologia-crear/inmunologia-crear.component';
import { LabgeneticaCrearComponent } from './components/admin/addforms/labgenetica-crear/labgenetica-crear.component';
import { LabhematologiaCrearComponent } from './components/admin/addforms/labhematologia-crear/labhematologia-crear.component';
import { NatCrearComponent } from './components/admin/addforms/nat-crear/nat-crear.component';
import { UrinalisisCrearComponent } from './components/admin/addforms/urinalisis-crear/urinalisis-crear.component';
import { MicrobiologiaCrearComponent } from './components/admin/addforms/microbiologia-crear/microbiologia-crear.component';
import { HematologiaEditarComponent } from './components/admin/editforms/hematologia-editar/hematologia-editar.component';
import { InmunoquimicaEditarComponent } from './components/admin/editforms/inmunoquimica-editar/inmunoquimica-editar.component';
import { QuimicaEditarComponent } from './components/admin/editforms/quimica-editar/quimica-editar.component';
import { SerologiaEditarComponent } from './components/admin/editforms/serologia-editar/serologia-editar.component';
import { ParasitologiaEditarComponent } from './components/admin/editforms/parasitologia-editar/parasitologia-editar.component';
import { InmunologiaEditarComponent } from './components/admin/editforms/inmunologia-editar/inmunologia-editar.component';
import { LabgeneticaEditarComponent } from './components/admin/editforms/labgenetica-editar/labgenetica-editar.component';
import { LabhematologiaEditarComponent } from './components/admin/editforms/labhematologia-editar/labhematologia-editar.component';
import { NatEditarComponent } from './components/admin/editforms/nat-editar/nat-editar.component';
import { UrinalisisEditarComponent } from './components/admin/editforms/urinalisis-editar/urinalisis-editar.component';
import { UrinalisisListadoComponent } from './components/client/urinalisis-listado/urinalisis-listado.component';
import { MicrobiologiaEditarComponent } from './components/admin/editforms/microbiologia-editar/microbiologia-editar.component';
import { MicrobiologiaListadoComponent } from './components/client/microbiologia-listado/microbiologia-listado.component';

import { HematologiaListadoadminComponent } from './components/admin/listadoadmin/hematologia-listadoadmin/hematologia-listadoadmin.component';
import { InmunoquimicaListadoadminComponent } from './components/admin/listadoadmin/inmunoquimica-listadoadmin/inmunoquimica-listadoadmin.component';
import { QuimicaListadoadminComponent } from './components/admin/listadoadmin/quimica-listadoadmin/quimica-listadoadmin.component';
import { SerologiaListadoadminComponent } from './components/admin/listadoadmin/serologia-listadoadmin/serologia-listadoadmin.component';
import { ParasitologiaListadoadminComponent } from './components/admin/listadoadmin/parasitologia-listadoadmin/parasitologia-listadoadmin.component';
import { UrinalisisListadoadminComponent } from './components/admin/listadoadmin/urinalisis-listadoadmin/urinalisis-listadoadmin.component';
import { MicrobiologiaListadoadminComponent } from './components/admin/listadoadmin/microbiologia-listadoadmin/microbiologia-listadoadmin.component';
import { InmunologiaListadoadminComponent } from './components/admin/listadoadmin/inmunologia-listadoadmin/inmunologia-listadoadmin.component';
import { LabgeneticaListadoadminComponent } from './components/admin/listadoadmin/labgenetica-listadoadmin/labgenetica-listadoadmin.component';
import { LabhematologiaListadoadminComponent } from './components/admin/listadoadmin/labhematologia-listadoadmin/labhematologia-listadoadmin.component';
import { NatListadoadminComponent } from './components/admin/listadoadmin/nat-listadoadmin/nat-listadoadmin.component';



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
  {path: 'administrarhome', component: AdministrarhomeComponent},
  { path: 'medicamentos', component: MedicamentosComponent, canActivate: [AuthGuardService] },
  { path: 'medicamento/nuevo', component: MedicamentoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'lista-oficial', component: ListaOficialComponent },
  { path: 'comercial-generico', component: ComercialGenericoComponent },
  { path: 'medicamentos-listado', component: MedicamentosListadoComponent },
 // { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'editar-medicamento/:id', component: EditarMedicamentoComponent },

  //paths nuevos de listados cliente
  { path: 'hematologia-listado', component: HematologiaListadoComponent },
  { path: 'inmunoquimica-listado', component: InmunoquimicaListadoComponent },
  { path: 'perfiles', component:  PerfilesComponent },
  { path: 'quimica-listado', component: QuimicaListadoComponent },
  { path: 'serologia-listado', component: SerologiaListadoComponent },
  { path: 'parasitologia-listado', component: ParasitologiaListadoComponent },
  { path: 'inmunologia-listado', component: InmunologiaListadoComponent },
  { path: 'labgenetica-listado', component: LabgeneticaListadoComponent },
  { path: 'labhematologia-listado', component: LabhematologiaListadoComponent },
  { path: 'nat-listado', component: NatListadoComponent },
  { path: 'urinalisis-listado', component: UrinalisisListadoComponent },
  { path: 'microbiologia-listado', component: MicrobiologiaListadoComponent },


    //paths nuevos de listados admin
    { path: 'hematologia-listadoadmin', component: HematologiaListadoadminComponent },
    { path: 'inmunoquimica-listadoadmin', component: InmunoquimicaListadoadminComponent },
    { path: 'perfiles', component:  PerfilesComponent },
    { path: 'quimica-listadoadmin', component: QuimicaListadoadminComponent },
    { path: 'serologia-listadoadmin', component: SerologiaListadoadminComponent },
    { path: 'parasitologia-listadoadmin', component: ParasitologiaListadoadminComponent },
    { path: 'inmunologia-listadoadmin', component: InmunologiaListadoadminComponent },
    { path: 'labgenetica-listadoadmin', component: LabgeneticaListadoadminComponent },
    { path: 'labhematologia-listadoadmin', component: LabhematologiaListadoadminComponent },
    { path: 'nat-listadoadmin', component: NatListadoadminComponent },
    { path: 'urinalisis-listadoadmin', component: UrinalisisListadoadminComponent },
    { path: 'microbiologia-listadoadmin', component: MicrobiologiaListadoadminComponent },

    //paths nuevos de add admin
    { path: 'hematologia-crear', component: HematologiaCrearComponent },
    { path: 'inmunoquimica-crear', component: InmunoquimicaCrearComponent},
    { path: 'quimica-crear', component: QuimicaCrearComponent},
    { path: 'serologia-crear', component: SerologiaCrearComponent},
    { path: 'parasitologia-crear', component: ParasitologiaCrearComponent},
    { path: 'inmunologia-crear', component: InmunologiaCrearComponent},
    { path: 'labgenetica-crear', component: LabgeneticaCrearComponent},
    { path: 'labhematologia-crear', component: LabhematologiaCrearComponent},
    { path: 'nat-crear', component: NatCrearComponent},
    { path: 'urinalisis-crear', component: UrinalisisCrearComponent},
    { path: 'microbiologia-crear', component: MicrobiologiaCrearComponent},


    //paths nuevos de edit admin
    { path: 'hematologia-editar', component: HematologiaEditarComponent },
    { path: 'inmunoquimica-editar', component: InmunoquimicaEditarComponent},
    { path: 'quimica-editar', component: QuimicaEditarComponent},
    { path: 'serologia-editar', component: SerologiaEditarComponent},
    { path: 'parasitologia-editar', component: ParasitologiaEditarComponent},
    { path: 'inmunologia-editar', component: InmunologiaEditarComponent},
    { path: 'labgenetica-editar', component: LabgeneticaEditarComponent},
    { path: 'labhematologia-editar', component: LabhematologiaEditarComponent},
    { path: 'nat-editar', component: NatEditarComponent},
    { path: 'urinalisis-editar', component: UrinalisisEditarComponent},
    { path: 'microbiologia-editar', component: MicrobiologiaEditarComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
