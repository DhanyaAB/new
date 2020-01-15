import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rep2Component } from './rep2.component';

describe('Rep2Component', () => {
  let component: Rep2Component;
  let fixture: ComponentFixture<Rep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
