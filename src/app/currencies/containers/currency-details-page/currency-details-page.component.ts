import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Currency, FiatCurrency } from '../../models';
import { CurrenciesStore } from '../../store/currencies.store';
import { SelectCurrency } from '../../store/currencies.actions';

@Component({
  selector: 'app-currency-details-page',
  templateUrl: './currency-details-page.component.html',
  styleUrls: ['./currency-details-page.component.scss']
})
export class CurrencyDetailsPageComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(CurrenciesStore.currencyDetails)
  public selectedCurrency$: Observable<Currency>;

  @Select(CurrenciesStore.isLoading)
  public isLoading$: Observable<boolean>;

  @Select(CurrenciesStore.fiatCurrency)
  public fiatCurrency$: Observable<FiatCurrency>;

  ngOnInit() {
    this.store.dispatch([new SelectCurrency('BTC')]);
  }

}
