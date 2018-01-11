import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiExample1Component } from './di-example1.component';

describe('DiExample1Component', () => {
  let component: DiExample1Component;
  let fixture: ComponentFixture<DiExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
