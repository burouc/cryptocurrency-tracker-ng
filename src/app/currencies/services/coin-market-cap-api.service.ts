import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCapApiService {

  constructor(private http: HttpClient) { }

  private baseApiUrl = 'https://api.coinmarketcap.com/v1';

  getCurrencies(): Observable<Currency[]> {
    return this
      .http
      .get<Currency[]>(`${ this.baseApiUrl }/ticker/`);
  }
}
