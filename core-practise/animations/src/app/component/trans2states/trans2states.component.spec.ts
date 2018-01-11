import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trans2statesComponent } from './trans2states.component';

describe('Trans2statesComponent', () => {
  let component: Trans2statesComponent;
  let fixture: ComponentFixture<Trans2statesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trans2statesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trans2statesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
