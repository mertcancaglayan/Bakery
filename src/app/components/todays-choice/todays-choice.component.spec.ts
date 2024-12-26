import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysChoiceComponent } from './todays-choice.component';

describe('TodaysChoiceComponent', () => {
  let component: TodaysChoiceComponent;
  let fixture: ComponentFixture<TodaysChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
