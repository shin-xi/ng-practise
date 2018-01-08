import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDestroyComponent } from './init-destroy.component';

describe('InitDestroyComponent', () => {
  let component: InitDestroyComponent;
  let fixture: ComponentFixture<InitDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
