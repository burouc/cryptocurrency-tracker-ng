import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Currency } from '../../models';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss']
})
export class CurrenciesListComponent {
  @Input() currencies: Currency[];

  @Input() fiatCurrency: string;

  constructor(private router: Router) {}

  get priceKey() {
    return `price_${this.fiatCurrency.toLowerCase()}`;
  }

  public displayedColumns: string[] = [
    'rank',
    'symbol',
    'price',
    'change24h'
  ];

  public goToCurrency(currencySymbol: string) {
    this.router.navigate(['/currencies', currencySymbol]);
  }

}
