import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinComponent } from './jenkin.component';

describe('JenkinComponent', () => {
  let component: JenkinComponent;
  let fixture: ComponentFixture<JenkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
