import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FiatCurrency } from '../../models';

@Component({
  selector: 'app-fiat-currency-select',
  templateUrl: './fiat-currency-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FiatCurrencySelectComponent),
      multi: true
    }
  ]
})
export class FiatCurrencySelectComponent implements ControlValueAccessor {

  selected: FiatCurrency = null;

  options: FiatCurrency[] = [
    FiatCurrency.EUR,
    FiatCurrency.USD,
    FiatCurrency.CNY
  ];

  private onChange: (currency: FiatCurrency) => void = (currency: FiatCurrency) => {};
  private onTouch: () => void = () => {};

  setValue(value: FiatCurrency) {
    this.writeValue(value);
    this.onTouch();
  }

  writeValue(value: FiatCurrency) {
    this.onChange(value);
    this.selected = value;
  }

  registerOnChange(fn: (currency: FiatCurrency) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }
}
