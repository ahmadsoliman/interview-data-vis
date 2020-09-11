import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaySliderComponent } from './two-way-slider.component';

describe('TwoWaySliderComponent', () => {
  let component: TwoWaySliderComponent;
  let fixture: ComponentFixture<TwoWaySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWaySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWaySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
