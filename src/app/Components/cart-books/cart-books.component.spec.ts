import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBooksComponent } from './cart-books.component';

describe('CartBooksComponent', () => {
  let component: CartBooksComponent;
  let fixture: ComponentFixture<CartBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
