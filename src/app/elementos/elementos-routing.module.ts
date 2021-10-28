import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementosPage } from './elementos.page';

const routes: Routes = [
  {
    path: '',
    component: ElementosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementosPageRoutingModule {}
