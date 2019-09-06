import { TestBed } from '@angular/core/testing';

import { CoinMarketCapApiService } from './coin-market-cap-api.service';

describe('CoinMarketCapApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinMarketCapApiService = TestBed.get(CoinMarketCapApiService);
    expect(service).toBeTruthy();
  });
});
