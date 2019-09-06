import { Component, Input } from '@angular/core';

import { Currency } from '../../models';
import { Router } from '@angular/router';

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
