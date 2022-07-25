import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModuleService } from "./module.service";
import { combineLatest, concatAll, map, mergeMap, Observable } from "rxjs";
import { FormField, Module } from "./module.model";
import { DataRendererComponent } from "./data-renderer.component";
import { CommonModule } from "@angular/common";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  standalone: true,
  selector: 'module-detail',
  template: `
    <style>
      .module-title {
        width: 100%;
        margin: 1rem 0;
        font-weight: 600;
        font-size: 2rem;
        color: #1890ff;
      }
      .btn{
        margin: 1rem 0;
      }
    </style>
    <ng-container *ngIf="moduleSchema.length">
      <nz-table #basicTable [nzData]="data">
        <thead>
        <tr>
          <th *ngFor="let field of moduleSchema">{{field?.field_name}}</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td *ngFor="let field of moduleSchema">{{data?.[field.field_name]}}</td>
        </tr>
        </tbody>
      </nz-table>
    </ng-container>
    <div class="module-title">{{module?.name}} - Module</div>
    <ng-container *ngIf="module">
      <button nz-button nzType="primary" class="btn" (click)="renderer = true">Render Form Fields To Insert Module</button>
      <data-renderer *ngIf="renderer" [moduleId]="module.id"></data-renderer>
    </ng-container>
  `,
  imports: [
    CommonModule,
    DataRendererComponent,
    NzTableModule,
    NzButtonModule
  ]
})
export class ModuleDetailComponent implements OnInit{
  module: Module;
  renderer: boolean = false;
  moduleSchema: FormField[] = [];
  data: any[] = [];

  constructor(
    private readonly actRoute: ActivatedRoute,
    private readonly service: ModuleService
  ) {
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params: any) => {
      this.service.getModules().pipe(
        map((response: Module[]) => response.find((x: Module) => x.id == params['id'])),
        mergeMap((module: Module) => {
            this.module = {...module};
            return [
              this.service.getModuleSchema(module.id),
              this.service.getModuleData(module.id)]
        }),
        concatAll()
      ).subscribe(ress => {
        console.log('resss', ress)
      })
    });
  }
}
