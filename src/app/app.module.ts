import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//For forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

//For http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

//Interceptors
import { AuthInterceptor } from 'src/app/_Core/Interceptors/auth.interceptor';
import { ErrorInterceptor } from 'src/app/_Core/Interceptors/error.interceptor';
//loaders
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
