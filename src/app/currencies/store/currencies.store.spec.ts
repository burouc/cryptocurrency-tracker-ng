import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { LoadCurrencies } from './currencies.actions';
import { CurrenciesStore } from './currencies.store';
import { CoinMarketCapApiService } from '../services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Currency } from '../models';

const exampleCurrency: Currency = {
  id: 'bitcoin',
  name: 'Bitcoin',
  symbol: 'BTC',
  rank: '1',
  price_usd: '10418.639336',
  price_btc: '1.0',
  '24h_volume_usd': '18218009304.0',
  market_cap_usd: '186710351813',
  available_supply: '17920800.0',
  total_supply: '17920800.0',
  max_supply: '21000000.0',
  percent_change_1h: '0.23',
  percent_change_24h: '-3.7',
  percent_change_7d: '8.38',
  last_updated: '1567855653'
};

describe('CurrenciesStore', () => {
  let store: Store;
  let coinMarketCapApiService: CoinMarketCapApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([CurrenciesStore])],
      providers: [CoinMarketCapApiService]
    });

    coinMarketCapApiService = TestBed.get(CoinMarketCapApiService);
    store = TestBed.get(Store);
  }));

  describe('LoadCurrencies', () => {
    it('should set isLoading to true', () => {
      store.dispatch(new LoadCurrencies());
      store
        .selectOnce(state => state.currencies.isLoading)
        .subscribe(isLoading => {
          expect(isLoading).toBe(true);
        });
    });
  });

  describe('LoadCurrencies', () => {
    it('should set currencies to the ones returned from service and set isLoading to false', () => {
      spyOn(coinMarketCapApiService, 'getCurrencies').and.returnValue(of([exampleCurrency]));

      store.dispatch(new LoadCurrencies());
      store
        .select(state => state.currencies)
        .subscribe(currenciesState => {
          expect(currenciesState.currencies).toEqual([exampleCurrency]);
          expect(currenciesState.isLoading).toBe(false);
        });
    });
  });
});
