import { Component, Input, OnChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormioModule } from 'angular-formio';
import { ModuleService } from "./module.service";
import { map } from "rxjs";
import { Module } from "./module.model";
import { MOCKCONFIG } from './mock';

@Component({
  standalone: true,
  selector: 'data-renderer',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormioModule
  ],
  template: `
    <formio [form]="formConfig" (submit)="onSubmit($event)"></formio>
  `
})
export class DataRendererComponent implements OnChanges{
  @Input() moduleId: number;
  formConfig: any;
  module: Module;

  constructor(
    private readonly service: ModuleService
  ) {
  }

  ngOnChanges() {
    if(!isNaN(this.moduleId)){
      this.service.getModules().pipe(
        map((response: Module[]) => response.find((x: Module) => x.id === this.moduleId))
      ).subscribe(res => {
        this.module = {...res as any};
        // this.formConfig = {
        //   title: this.module.name,
        //   components: JSON.parse(this.module?.form_config)
        // }
        this.formConfig = {...MOCKCONFIG};
      })
    }
  }

  onSubmit(s: any){
    this.service.creatModuleData({
      module_id: this.moduleId,
      data: s?.data
    }).subscribe();
  }
}
