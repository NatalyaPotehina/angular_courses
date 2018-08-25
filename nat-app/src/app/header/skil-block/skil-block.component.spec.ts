import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilBlockComponent } from './skil-block.component';

describe('SkilBlockComponent', () => {
  let component: SkilBlockComponent;
  let fixture: ComponentFixture<SkilBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
