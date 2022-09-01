import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBusComponent } from './display-bus.component';

describe('DisplayBusComponent', () => {
  let component: DisplayBusComponent;
  let fixture: ComponentFixture<DisplayBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
