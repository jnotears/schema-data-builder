import { Component, OnInit } from '@angular/core';
import { Module } from "./module/module.model";
import { ModuleService } from "./module/module.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  modules: Module[] = []

  constructor(
    private readonly service: ModuleService
  ) {
  }

  ngOnInit() {
    this.service.getModules().subscribe(res => this.modules = [...res as Module[]]);
  }
}
