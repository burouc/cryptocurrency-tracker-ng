import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatCurrencySelectComponent } from './fiat-currency-select.component';

describe('FiatCurrencySelectComponent', () => {
  let component: FiatCurrencySelectComponent;
  let fixture: ComponentFixture<FiatCurrencySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatCurrencySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiatCurrencySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
