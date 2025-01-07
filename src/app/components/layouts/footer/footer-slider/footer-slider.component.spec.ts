import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSliderComponent } from './footer-slider.component';

describe('FooterSliderComponent', () => {
  let component: FooterSliderComponent;
  let fixture: ComponentFixture<FooterSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
