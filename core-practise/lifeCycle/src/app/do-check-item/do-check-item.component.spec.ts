import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckItemComponent } from './do-check-item.component';

describe('DoCheckItemComponent', () => {
  let component: DoCheckItemComponent;
  let fixture: ComponentFixture<DoCheckItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
