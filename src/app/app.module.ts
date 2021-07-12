

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XinChaoComponent } from './xin-chao/xin-chao.component';
import { InputchangeComponent } from './inputchange/inputchange.component';
import { FormsModule } from '@angular/forms';
import { NgforExComponent } from './ngfor-ex/ngfor-ex.component';

@NgModule({
  declarations: [AppComponent, XinChaoComponent, InputchangeComponent, NgforExComponent],
  imports: [BrowserModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
