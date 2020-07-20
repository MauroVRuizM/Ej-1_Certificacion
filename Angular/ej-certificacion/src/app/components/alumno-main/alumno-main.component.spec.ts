import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALumnoMainComponent } from './alumno-main.component';

describe('ALumnoMainComponent', () => {
  let component: ALumnoMainComponent;
  let fixture: ComponentFixture<ALumnoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALumnoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALumnoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
