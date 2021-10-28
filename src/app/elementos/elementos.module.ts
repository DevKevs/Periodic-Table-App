import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementosPageRoutingModule } from './elementos-routing.module';

import { ElementosPage } from './elementos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementosPageRoutingModule
  ],
  declarations: [ElementosPage]
})
export class ElementosPageModule {}
