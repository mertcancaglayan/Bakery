import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLocationsComponent } from './our-locations.component';

describe('OurLocationsComponent', () => {
  let component: OurLocationsComponent;
  let fixture: ComponentFixture<OurLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
