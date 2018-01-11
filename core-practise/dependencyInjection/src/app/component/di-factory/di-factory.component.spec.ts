import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiFactoryComponent } from './di-factory.component';

describe('DiFactoryComponent', () => {
  let component: DiFactoryComponent;
  let fixture: ComponentFixture<DiFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
