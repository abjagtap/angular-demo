import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgPipesComponent } from './ng-pipes/ng-pipes.component';
import { NgReactiveFormsComponent } from './ng-reactive-forms/ng-reactive-forms.component';
const routes: Routes = [
  {
    path: 'pipes',
    component: NgPipesComponent
  },
  {
    path: 'rective-forms',
    component: NgReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
