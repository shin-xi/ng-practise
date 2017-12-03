import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRedditComponent } from './simple-reddit.component';

describe('SimpleRedditComponent', () => {
  let component: SimpleRedditComponent;
  let fixture: ComponentFixture<SimpleRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
