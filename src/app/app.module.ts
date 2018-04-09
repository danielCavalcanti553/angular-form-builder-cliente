import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ClienteService } from './service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { ErrorInterceptorProvider } from './error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NovoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
