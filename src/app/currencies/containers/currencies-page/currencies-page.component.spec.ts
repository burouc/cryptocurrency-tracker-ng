import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NgxsModule, Store } from '@ngxs/store';

import { CurrenciesPageComponent } from './currencies-page.component';

describe('CurrenciesPageComponent', () => {
  let component: CurrenciesPageComponent;
  let fixture: ComponentFixture<CurrenciesPageComponent>;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj<Store>(['dispatch', 'selectSnapshot']  as any);

    TestBed.configureTestingModule({
      declarations: [ CurrenciesPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [NgxsModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesPageComponent);
    component = fixture.componentInstance;
    Object.defineProperty(component, 'isLoading$', { writable: true });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading overlay when loading isLoading is set to true', () => {
    component.isLoading$ = of(true);
    fixture.detectChanges();

    const pageElement: HTMLElement = fixture.nativeElement;
    const appLoadingElement = pageElement.querySelector('app-loading-overlay');

    expect(appLoadingElement).toBeTruthy();
  });
});
