import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsSliderComponent } from './our-products-slider.component';

describe('OurProductsSliderComponent', () => {
  let component: OurProductsSliderComponent;
  let fixture: ComponentFixture<OurProductsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProductsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
