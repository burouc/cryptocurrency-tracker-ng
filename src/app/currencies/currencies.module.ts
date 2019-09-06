import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';

import { CurrenciesPageComponent } from './containers/currencies-page/currencies-page.component';
import { CurrencyDetailsPageComponent } from './containers/currency-details-page/currency-details-page.component';
import { CurrenciesListComponent } from './components/currencies-list/currencies-list.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { SettingsPageComponent } from './containers/settings-page/settings-page.component';


const routes: Routes = [
  {
    path: '',
    component: CurrenciesPageComponent
  },
  {
    path: 'currencies/:id',
    component: CurrencyDetailsPageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  declarations: [
    CurrenciesPageComponent,
    CurrencyDetailsPageComponent,
    CurrenciesListComponent,
    CurrencyDetailsComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class CurrenciesModule { }
