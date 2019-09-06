export class LoadCurrencies {
  static type = '[Currencies] Load currencies';
}

export class SelectCurrency {
  static type = '[Currencies] Select Currency';
  constructor(public currency: string) {}
}

export class ClearCurrencies {
  static type = '[Currencies] Clear Currencies';
}
