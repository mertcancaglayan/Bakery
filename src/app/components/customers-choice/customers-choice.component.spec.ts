import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersChoiceComponent } from './customers-choice.component';

describe('CustomersChoiceComponent', () => {
  let component: CustomersChoiceComponent;
  let fixture: ComponentFixture<CustomersChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
