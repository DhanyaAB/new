import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { History3Component } from './history3.component';

describe('History3Component', () => {
  let component: History3Component;
  let fixture: ComponentFixture<History3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ History3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(History3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
