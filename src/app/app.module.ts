import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaOficialComponent } from './components/lista-oficial/lista-oficial.component';

import { ComercialGenericoComponent } from './components/comercial-generico/comercial-generico.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EditarMedicamentoComponent } from './components/editar-medicamento/editar-medicamento.component';
import { FiltroPipe } from './filtro.pipe';
import { RegisterComponent } from './components/usuario/register/register.component';

//services
//import { MedicamentosService } from './services/medicamentos.service';
//import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicamentosComponent,
    MedicamentoComponent,
    DetalleComponent,
    ListaOficialComponent,
   
    ComercialGenericoComponent,
    NavbarComponent,
    UserEditComponent,
    EditarMedicamentoComponent,
    FiltroPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
   // MedicamentosService,
   // UserService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
