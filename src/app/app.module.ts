import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegisterComponent } from './components/usuario/register/register.component';
import { UserEditComponent } from './components/usuario/user-edit/user-edit.component';

import { HomeComponent } from './components/home/home.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaOficialComponent } from './components/lista-oficial/lista-oficial.component';

import { ComercialGenericoComponent } from './components/comercial-generico/comercial-generico.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { EditarMedicamentoComponent } from './components/editar-medicamento/editar-medicamento.component';
import { FilterPipe } from './pipes/filter.pipe';


//services
import { MedicamentosService } from './services/medicamentos.service';
import { UserService } from './services/user.service';



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
