import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: '' , component: AppComponent},
  { path: 'module/:id', loadComponent: () => import('./module/module-detail.component').then(c => c.ModuleDetailComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
