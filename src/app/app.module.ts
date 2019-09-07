import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';

import { CurrenciesModule, CurrenciesStore } from './currencies';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    CurrenciesModule,
    NgxsModule.forRoot([CurrenciesStore]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
