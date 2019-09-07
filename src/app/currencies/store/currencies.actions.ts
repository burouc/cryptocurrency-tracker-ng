import { FiatCurrency } from '../models';

export class LoadCurrencies {
  static type = '[Currencies] Load currencies';
}

export class SelectCurrency {
  static type = '[Currencies] Select Currency';
  constructor(public currency: string) {}
}

export class SetFiatCurrency {
  static type = '[Currencies] Set Fiat Currencies';
  constructor(public selectedFiatCurrency: FiatCurrency) {}
}

export class SetError {
  static type = '[Currencies] Set Error';
  constructor(public error: string) {}
}

export class ClearCurrencies {
  static type = '[Currencies] Clear Currencies';
}
