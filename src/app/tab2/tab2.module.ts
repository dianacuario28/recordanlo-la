//Esta seccion es la biblioteca de mi proyecto

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
    AngularFireDatabase // Agregamos la libreria importada
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
