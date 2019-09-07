import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Currency, FiatCurrency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCapApiService {

  constructor(private http: HttpClient) { }

  private baseApiUrl = 'https://api.coinmarketcap.com/v1';

  getCurrencies(convert: FiatCurrency, limit: string = '100'): Observable<Currency[]> {
    const params = new HttpParams()
      .set('convert', convert)
      .set('limit', limit);

    return this
      .http
      .get<Currency[]>(`${ this.baseApiUrl }/ticker/`, { params });
  }
}
