import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiClassComponent } from './di-class.component';

describe('DiClassComponent', () => {
  let component: DiClassComponent;
  let fixture: ComponentFixture<DiClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
