import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { LoadCurrencies } from '../../store/currencies.actions';
import { CurrenciesStore } from '../../store/currencies.store';
import { Currency, FiatCurrency } from '../../models';

@Component({
  selector: 'app-currencies-page',
  templateUrl: './currencies-page.component.html',
  styleUrls: ['./currencies-page.component.scss']
})
export class CurrenciesPageComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(CurrenciesStore.currencies)
  public currencies$: Observable<Currency[]>;

  @Select(CurrenciesStore.isLoading)
  public isLoading$: Observable<boolean>;

  @Select(CurrenciesStore.fiatCurrency)
  public fiatCurrency$: Observable<FiatCurrency>;

  ngOnInit() {
    this.store.dispatch([LoadCurrencies]);
  }
}
