import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiSampleComponent } from './di-sample.component';

describe('DiSampleComponent', () => {
  let component: DiSampleComponent;
  let fixture: ComponentFixture<DiSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
