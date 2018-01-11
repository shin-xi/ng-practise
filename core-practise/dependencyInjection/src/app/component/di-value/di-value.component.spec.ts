import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiValueComponent } from './di-value.component';

describe('DiValueComponent', () => {
  let component: DiValueComponent;
  let fixture: ComponentFixture<DiValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
