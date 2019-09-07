import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FiatCurrency } from '../../models';
import { CurrenciesStore } from '../../store/currencies.store';
import { SetFiatCurrency } from '../../store/currencies.actions';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {

  constructor(private location: Location,
              private store: Store,
              private router: Router) { }

  @Select(CurrenciesStore.fiatCurrency)
  private fiatCurrency$: Observable<FiatCurrency>;

  private unsubscriber$ = new Subject<void>();

  selectedFiatCurrency: FiatCurrency;

  ngOnInit() {
    this
      .fiatCurrency$
      .pipe(
        takeUntil(this.unsubscriber$)
      )
      .subscribe((fiatCurrency: FiatCurrency) => {
        this.selectedFiatCurrency = fiatCurrency;
      });
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  confirm() {
    this.store.dispatch(new SetFiatCurrency(this.selectedFiatCurrency));
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
