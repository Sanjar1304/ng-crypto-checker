import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { HttpClientModule } from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
