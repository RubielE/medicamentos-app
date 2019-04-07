import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegisterComponent } from './components/usuario/register/register.component';
import { UserEditComponent } from './components/usuario/user-edit/user-edit.component';

import { HomeComponent } from './components/home/home.component';
import { MedicamentosListadoComponent } from './components/client/medicamentos-listado/medicamentos-listado.component';
import { MedicamentosComponent } from './components/admin/listadoadmin/medicamentos/medicamentos.component';
import { MedicamentoComponent } from './components/admin/addforms/medicamento/medicamento.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaOficialComponent } from './components/client/lista-oficial/lista-oficial.component';

import { ComercialGenericoComponent } from './components/client/comercial-generico/comercial-generico.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { EditarMedicamentoComponent } from './components/admin/editforms/editar-medicamento/editar-medicamento.component';
import { FilterPipe } from './pipes/filter.pipe';


//services
import { MedicamentosService } from './services/medicamentos.service';
import { UserService } from './services/user.service';

//components complejo
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
import { MicrobiologiaEditarComponent } from './components/admin/editforms/microbiologia-editar/microbiologia-editar.component';
import { AdministrarhomeComponent } from './components/admin/administrarhome/administrarhome.component';
import { UrinalisisListadoComponent } from './components/client/urinalisis-listado/urinalisis-listado.component';
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
import { FilterhematPipe } from './pipes/filterhemat.pipe';
import { FilterinmuquimicaPipe } from './pipes/filterinmuquimica.pipe';
import { FilterquimicaPipe } from './pipes/filterquimica.pipe';
import { FilterserologiaPipe } from './pipes/filterserologia.pipe';
import { FilterparasitologiaPipe } from './pipes/filterparasitologia.pipe';
import { FilterinmunoloPipe } from './pipes/filterinmunolo.pipe';
import { FilterlabgenetPipe } from './pipes/filterlabgenet.pipe';
import { FilterlabhematPipe } from './pipes/filterlabhemat.pipe';
import { FilternatPipe } from './pipes/filternat.pipe';
import { FilterurinalPipe } from './pipes/filterurinal.pipe';
import { FiltermicrobioPipe } from './pipes/filtermicrobio.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    MedicamentosComponent,
    MedicamentoComponent,
    DetalleComponent,
    ListaOficialComponent,

    ComercialGenericoComponent,
    NavbarComponent,
    EditarMedicamentoComponent,
    FilterPipe,
    MedicamentosListadoComponent,
    HematologiaListadoComponent,
    InmunoquimicaListadoComponent,
    PerfilesComponent,
    QuimicaListadoComponent,
    SerologiaListadoComponent,
    ParasitologiaListadoComponent,
    InmunologiaListadoComponent,
    LabgeneticaListadoComponent,
    LabhematologiaListadoComponent,
    NatListadoComponent,
    HematologiaCrearComponent,
    InmunoquimicaCrearComponent,
    QuimicaCrearComponent,
    SerologiaCrearComponent,
    ParasitologiaCrearComponent,
    InmunologiaCrearComponent,
    LabgeneticaCrearComponent,
    LabhematologiaCrearComponent,
    NatCrearComponent,
    UrinalisisCrearComponent,
    MicrobiologiaCrearComponent,
    HematologiaEditarComponent,
    InmunoquimicaEditarComponent,
    QuimicaEditarComponent,
    SerologiaEditarComponent,
    ParasitologiaEditarComponent,
    InmunologiaEditarComponent,
    LabgeneticaEditarComponent,
    LabhematologiaEditarComponent,
    NatEditarComponent,
    UrinalisisEditarComponent,
    MicrobiologiaEditarComponent,
    AdministrarhomeComponent,
    UrinalisisListadoComponent,
    MicrobiologiaListadoComponent,
    HematologiaListadoadminComponent,
    InmunoquimicaListadoadminComponent,
    QuimicaListadoadminComponent,
    SerologiaListadoadminComponent,
    ParasitologiaListadoadminComponent,
    UrinalisisListadoadminComponent,
    MicrobiologiaListadoadminComponent,
    InmunologiaListadoadminComponent,
    LabgeneticaListadoadminComponent,
    LabhematologiaListadoadminComponent,
    NatListadoadminComponent,
    FilterhematPipe,
    FilterinmuquimicaPipe,
    FilterquimicaPipe,
    FilterserologiaPipe,
    FilterparasitologiaPipe,
    FilterinmunoloPipe,
    FilterlabgenetPipe,
    FilterlabhematPipe,
    FilternatPipe,
    FilterurinalPipe,
    FiltermicrobioPipe
   
    

  //  RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
   // MedicamentosService,
   // UserService
  ],
  providers: [MedicamentosService,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
