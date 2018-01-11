import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiExample2Component } from './di-example2.component';

describe('DiExample2Component', () => {
  let component: DiExample2Component;
  let fixture: ComponentFixture<DiExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
