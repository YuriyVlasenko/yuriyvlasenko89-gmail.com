import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContanctsComponent } from './contancts.component';

describe('ContanctsComponent', () => {
  let component: ContanctsComponent;
  let fixture: ComponentFixture<ContanctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContanctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContanctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
