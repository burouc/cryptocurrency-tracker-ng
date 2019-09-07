import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Currency, FiatCurrency } from '../../models';
import { CurrenciesStore } from '../../store/currencies.store';
import { ClearCurrencies, LoadCurrencies, SelectCurrency, SetError } from '../../store/currencies.actions';

@Component({
  selector: 'app-currency-details-page',
  templateUrl: './currency-details-page.component.html'
})
export class CurrencyDetailsPageComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(CurrenciesStore.currencyDetails)
  public selectedCurrency$: Observable<Currency>;

  @Select(CurrenciesStore.isLoading)
  public isLoading$: Observable<boolean>;

  @Select(CurrenciesStore.fiatCurrency)
  public fiatCurrency$: Observable<FiatCurrency>;

  @Select(CurrenciesStore.error)
  public error$: Observable<Error>;

  ngOnInit() {
    this.store.dispatch([new SelectCurrency('BTC')]);
  }

  hideError() {
    this.store.dispatch(new SetError(null));
  }

  refresh() {
    this.store.dispatch([ClearCurrencies, LoadCurrencies]);
  }
}
