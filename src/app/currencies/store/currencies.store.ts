import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { Currency, FiatCurrency } from '../models';
import { CoinMarketCapApiService } from '../services';
import { LoadCurrencies, SelectCurrency, ClearCurrencies, SetFiatCurrency } from './currencies.actions';

export interface CurrenciesState {
  currencies: Currency[];
  fiatCurrency: FiatCurrency;
  isLoading: boolean;
  loaded: boolean;
  selectedCurrencySymbol: string;
}

@State<CurrenciesState>({
  name: 'currencies',
  defaults: {
    currencies: [],
    fiatCurrency: FiatCurrency.EUR,
    isLoading: false,
    loaded: false,
    selectedCurrencySymbol: null
  }
})
export class CurrenciesStore {
  constructor(private coinMarketCapApiService: CoinMarketCapApiService) {}

  @Selector()
  static currencies(state: CurrenciesState): Currency[] {
    return state.currencies;
  }

  @Selector()
  static fiatCurrency(state: CurrenciesState): FiatCurrency {
    return state.fiatCurrency;
  }

  @Selector()
  static isLoading(state: CurrenciesState): boolean {
    return state.isLoading;
  }

  @Selector()
  static currencyDetails(state: CurrenciesState): Currency | null {
    const { isLoading, selectedCurrencySymbol, currencies } = state;

    console.log(state);

    if (isLoading) {
      return null;
    }

    if (!selectedCurrencySymbol) {
      return null;
    }

    const selectedCurrency = currencies
      .find(({ symbol }) => symbol === selectedCurrencySymbol);

    return selectedCurrency ?
      selectedCurrency :
      null;
  }

  @Action(LoadCurrencies)
  loadCurrencies({ patchState, getState }: StateContext<CurrenciesState>) {
    const { loaded, fiatCurrency } = getState();

    if (loaded) {
      return;
    }
    patchState({ isLoading: true });

    return this
      .coinMarketCapApiService
      .getCurrencies(fiatCurrency)
      .pipe(
        tap(currencies => {
          patchState({ currencies, isLoading: false, loaded: true });
        })
    );
  }

  @Action(SelectCurrency)
  selectCurrency({ patchState, getState, dispatch }: StateContext<CurrenciesState>, { currency }: SelectCurrency) {
    const { loaded, fiatCurrency } = getState();

    if (!loaded) {
      dispatch(LoadCurrencies);
    }

    patchState({ selectedCurrencySymbol: currency });
  }

  @Action(SetFiatCurrency)
  setFiatCurrency({ patchState, getState, dispatch }: StateContext<CurrenciesState>, { selectedFiatCurrency }: SetFiatCurrency) {
    const { fiatCurrency } = getState();

    if (selectedFiatCurrency !== fiatCurrency) {
      patchState({ fiatCurrency: selectedFiatCurrency, loaded: false });
    }
  }


  @Action(ClearCurrencies)
  clearCurrencies({ patchState }: StateContext<CurrenciesState>) {
    patchState({ currencies: [], loaded: false });
  }
}
