import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let el: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      providers: [ ShoppingListService ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

    // spyOn(component.filteredShoes, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should filter and emit shoes array by lowest price', () => {
  //   const priceButton = el.queryAll(By.css('.dropdown-item'))[0];
  //   const priceFilter = component.shoes.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1 : 0));

  //   priceButton.triggerEventHandler("click", null);
  //   expect(priceButton.nativeElement.textContent).toBe("Menor Preço");
  //   expect(component.selectedFilter).toBe("Menor Preço");
  //   expect(component.shoes).toEqual(priceFilter);
  //   expect(component.filteredShoes.emit).withContext('Filtered shoes array was not emited').toHaveBeenCalledWith(component.shoes);
  // });

  // it('should filter and emit shoes array by its release', () => {
  //   const releaseButton = el.queryAll(By.css('.dropdown-item'))[1];
  //   const releaseFilter = component.shoes.filter(filter => filter.release != false);

  //   releaseButton.triggerEventHandler("click", null);
  //   expect(releaseButton.nativeElement.textContent).withContext('Button label is incorrect').toBe("Lançamento");
  //   expect(component.selectedFilter).toBe("Lançamento");
  //   expect(component.shoes).withContext('shoes are not sorted by release').toEqual(releaseFilter);
  //   expect(component.filteredShoes.emit).withContext('Filtered shoes array was not emited').toHaveBeenCalledWith(component.shoes);
  // });

  // it('should filter and emit shoes array by its gender', () => {
  //   const maleButton = el.queryAll(By.css('.dropdown-item'))[2];
  //   const maleFilter = component.shoes.filter(filter => filter.gender === 'Masculino' || filter.gender === 'Unissex');

  //   maleButton.triggerEventHandler("click", null);
  //   expect(maleButton.nativeElement.textContent).withContext('Button label is incorrect').toBe("Masculino");
  //   expect(component.selectedFilter).toBe("Masculino");
  //   expect(component.shoes).withContext('shoes are not sorted by release').toEqual(maleFilter);
  //   expect(component.filteredShoes.emit).withContext('Filtered shoes array was not emited').toHaveBeenCalledWith(component.shoes);
  // });

  // it('should filter and emit shoes array by larger price', () => {
  //   const priceButton = el.queryAll(By.css('.dropdown-item'))[3];
  //   const priceFilter = component.shoes.sort((a,b) => (a.price < b.price)? 1 : ((b.price < a.price) ? -1 : 0));
    
  //   priceButton.triggerEventHandler("click", null);
  //   expect(priceButton.nativeElement.textContent).withContext('Button label is incorrect').toBe("Maior Preço");
  //   expect(component.selectedFilter).toBe("Maior Preço");
  //   expect(component.shoes).withContext('shoes are not sorted by Larger price').toEqual(priceFilter);
  //   expect(component.filteredShoes.emit).withContext('Filtered shoes array was not emited').toHaveBeenCalledWith(component.shoes);
  // });

  
});
