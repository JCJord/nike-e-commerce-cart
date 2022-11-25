import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ShoppingListService } from 'src/app/services/shopping-list-service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ShoppingItemComponent } from './shopping-item.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('ShoppingItemComponent', () => {
  let component: ShoppingItemComponent;
  let fixture: ComponentFixture<ShoppingItemComponent>;
  let store: MockStore;
  let shoppingListService: ShoppingListService;
  let route: ActivatedRoute;
  let mockShoppingService: jasmine.SpyObj<ShoppingListService>;
  let el: DebugElement;
  
  const paramsSubject = new BehaviorSubject({
    id: 0,
  });

  const initialState = { state: false };

  beforeEach(async () => {
    mockShoppingService = jasmine.createSpyObj(['getItem']);

    mockShoppingService.getItem.and.returnValue({
      id: 0, 
      name: 'chuteira mercurial', 
      gender: 'masculino', 
      type: 'casual', 
      release: false, 
      color: 'vermelho', 
      price: 5000, imgUrl: 
      'www.google.com/chuteira', 
      itemImgs: ['imagem chuteira'], 
      size:[37,39,40]
    });

    await TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule],
      declarations: [ ShoppingItemComponent ],
      providers:[{ 
        provide: ShoppingListService,
        useValue: mockShoppingService },
        CartServiceService,
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useValue: { params: paramsSubject }} 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemComponent);
    shoppingListService = TestBed.inject(ShoppingListService);
    route = TestBed.inject(ActivatedRoute);
    store = TestBed.inject(MockStore);
    el = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive id from url param & return item from shopping', () => {    
    route.params.subscribe((param) => {
      const id = param.id;
      const shoppingItem = shoppingListService.getItem(1);
      
      expect(shoppingItem.name).toBeTruthy();
      expect(shoppingItem.itemImgs.length).toBeGreaterThan(0);
      expect(id).not.toBe(undefined);
    });
  })
  
  it('form should be valid to be submitted', () => {
    let sizeField = component.cartForm.controls['size'];    
    expect(sizeField.valid).toBeFalsy();

    sizeField.setValue(38);
    expect(component.cartForm.valid).toBeTruthy();
  });
  
});
