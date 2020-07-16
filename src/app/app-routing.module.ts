import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent, canActivateChild: [], children: [
      { path: '', component: TelaInicialComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
