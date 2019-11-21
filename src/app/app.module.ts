import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { LoginComponent } from './login/login.component';
import { ContratosComponent } from './contratos/contratos.component';
import { HomeComponent } from './home/home.component';
import { CentrosComponent } from './centros/centros.component';
import { CargosComponent } from './cargos/cargos.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { UnidadComponent } from './UnidadMilitar/unidad.component';
import { PerfilComponent } from './perfil/perfil.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormCentroComponent } from './centros/form-centro/form-centro.component';
import { FormCargoComponent } from './cargos/form-cargo/form-cargo.component';
import { FormUnidadComponent } from './UnidadMilitar/form-unidad/form-unidad.component';
import { FormActividadComponent } from './actividades/form-actividad/form-actividad.component';
import { FormContratoComponent } from './contratos/form-contrato/form-contrato.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'trabajadores', component: TrabajadoresComponent},
  {path: 'contratos', component: ContratosComponent},
  {path: 'contratos/form_contrato', component: FormContratoComponent},
  {path: 'contratos/form_contrato/:id', component: FormContratoComponent},
  {path: 'centros', component: CentrosComponent},
  {path: 'centros/form_centro', component: FormCentroComponent},
  {path: 'centros/form_centro/:id', component: FormCentroComponent},
  {path: 'cargos', component: CargosComponent},
  {path: 'cargos/form_cargo', component: FormCargoComponent},
  {path: 'cargos/form_cargo/:id', component: FormCargoComponent},
  {path: 'unidadmilitar', component: UnidadComponent},
  {path: 'unidadmilitar/form_unidad', component: FormUnidadComponent},
  {path: 'unidadmilitar/form_unidad/:id', component: FormUnidadComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'actividades/form_actividad', component: FormActividadComponent},
  {path: 'actividades/form_actividad/:id', component: FormActividadComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrabajadoresComponent,
    ContratosComponent,
    HomeComponent,
    CentrosComponent,
    CargosComponent,
    ActividadesComponent,
    UnidadComponent,
    PerfilComponent,
    FormComponent,
    FormCentroComponent,
    FormCargoComponent,
    FormUnidadComponent,
    FormActividadComponent,
    FormContratoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (routes),
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
