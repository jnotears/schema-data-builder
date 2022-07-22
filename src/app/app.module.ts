import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconTestModule } from "ng-zorro-antd/icon/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ModuleService } from "./module/module.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconTestModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
