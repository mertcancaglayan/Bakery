import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsNavComponent } from './our-products-nav.component';

describe('OurProductsNavComponent', () => {
  let component: OurProductsNavComponent;
  let fixture: ComponentFixture<OurProductsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductsNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProductsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
