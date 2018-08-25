import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCounterComponent } from './summer-counter.component';

describe('SummerCounterComponent', () => {
  let component: SummerCounterComponent;
  let fixture: ComponentFixture<SummerCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
