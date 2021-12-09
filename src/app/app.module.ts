import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent], //運行的組件

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], //專案用到的 Module

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],  //專案用到的服務
  bootstrap: [AppComponent], //首頁
})
export class AppModule {}
