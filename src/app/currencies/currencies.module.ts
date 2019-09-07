import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';

import { CurrenciesPageComponent } from './containers/currencies-page/currencies-page.component';
import { CurrencyDetailsPageComponent } from './containers/currency-details-page/currency-details-page.component';
import { CurrenciesListComponent } from './components/currencies-list/currencies-list.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { SettingsPageComponent } from './containers/settings-page/settings-page.component';
import { FiatCurrencySelectComponent } from './components/fiat-currency-select/fiat-currency-select.component';
import { FormsModule } from '@angular/forms';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';


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
    SettingsPageComponent,
    FiatCurrencySelectComponent,
    LoadingOverlayComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ]
})
export class CurrenciesModule { }
