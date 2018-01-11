import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiExistingComponent } from './di-existing.component';

describe('DiExistingComponent', () => {
  let component: DiExistingComponent;
  let fixture: ComponentFixture<DiExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
