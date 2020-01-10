import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rep1Component } from './rep1.component';

describe('Rep1Component', () => {
  let component: Rep1Component;
  let fixture: ComponentFixture<Rep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
