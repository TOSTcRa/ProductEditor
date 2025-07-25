import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHtml } from './product';

describe('ProductHtml', () => {
  let component: ProductHtml;
  let fixture: ComponentFixture<ProductHtml>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHtml],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHtml);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
