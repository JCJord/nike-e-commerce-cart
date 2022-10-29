import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepCalculatorComponent } from './cep-calculator.component';

describe('CepCalculatorComponent', () => {
  let component: CepCalculatorComponent;
  let fixture: ComponentFixture<CepCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
