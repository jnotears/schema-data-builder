import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModuleService } from "./module.service";
import { map } from "rxjs";
import { Module } from "./module.model";
import { DataRendererComponent } from "./data-renderer.component";
import { CommonModule } from "@angular/common";

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
    <div class="module-title">{{module?.name}} - Module</div>
    <ng-container *ngIf="module">
      <button nz-button nzType="primary" class="btn" (click)="renderer = true">Render Form Fields To Insert Module</button>
      <data-renderer *ngIf="renderer" [moduleId]="module.id"></data-renderer>
    </ng-container>
  `,
  imports: [
    CommonModule,
    DataRendererComponent
  ]
})
export class ModuleDetailComponent implements OnInit{
  module: Module;
  renderer: boolean = false;

  constructor(
    private readonly actRoute: ActivatedRoute,
    private readonly service: ModuleService
  ) {
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params: any) => {
      this.service.getModules().pipe(
        map((response: Module[]) => response.find((x: Module) => x.id == params['id']))
      ).subscribe(res => {
        this.module = {...res as any};
      })
    });
  }
}
