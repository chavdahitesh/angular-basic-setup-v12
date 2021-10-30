import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule,ToastrService} from 'ngx-toastr'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from './core/interceptors/http.interceptor';
import { CryptojsIncreptDecript } from './core/auth/crypto-incrept-decript';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    ToastrService,
    CryptojsIncreptDecript,
    {
      provide:HTTP_INTERCEPTORS,useClass:httpInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
