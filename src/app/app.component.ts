import {Component, OnInit} from '@angular/core';
import {CoinMarketCapApiService} from './currencies/services/coin-market-cap-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public coinMarketCapApiService: CoinMarketCapApiService) {}

  ngOnInit() {
    this
      .coinMarketCapApiService
      .getCurrencies()
      .subscribe((result) => {
      console.log(result);
    });
  }
}
