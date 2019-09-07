import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LoadCurrencies, SetError } from '../../store/currencies.actions';
import { CurrenciesStore } from '../../store/currencies.store';
import { Currency, FiatCurrency } from '../../models';

@Component({
  selector: 'app-currencies-page',
  templateUrl: './currencies-page.component.html'
})
export class CurrenciesPageComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(CurrenciesStore.currencies)
  public currencies$: Observable<Currency[]>;

  @Select(CurrenciesStore.isLoading)
  public isLoading$: Observable<boolean>;

  @Select(CurrenciesStore.fiatCurrency)
  public fiatCurrency$: Observable<FiatCurrency>;

  @Select(CurrenciesStore.error)
  public error$: Observable<Error>;

  ngOnInit() {
    this.store.dispatch(LoadCurrencies);
  }

  hideError() {
    this.store.dispatch(new SetError(null));
  }
}
