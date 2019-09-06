import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './components';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
