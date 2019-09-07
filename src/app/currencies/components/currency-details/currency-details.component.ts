import { Component, Input } from '@angular/core';

import { Currency, FiatCurrency } from '../../models';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent {
  @Input() currency: Currency;

  @Input() fiatCurrency: FiatCurrency;

  get fiatCurrencySlug(): string {
    return this.fiatCurrency.toLowerCase();
  }
}

