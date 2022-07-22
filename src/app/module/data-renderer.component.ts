import { Component, Input, OnChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormioModule } from 'angular-formio';
import { ModuleService } from "./module.service";
import { find, map } from "rxjs";

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
    <formio [form]="formConfig"></formio>
  `
})
export class DataRendererComponent implements OnChanges{
  @Input() moduleId: number;
  formConfig: any;

  constructor(
    private readonly service: ModuleService
  ) {
  }

  ngOnChanges() {
    if(!isNaN(this.moduleId)){
      this.service.getModules().pipe(
        map((response) => (response as []).find((x: any) => x.id === this.moduleId))
      )
    }
  }
}
