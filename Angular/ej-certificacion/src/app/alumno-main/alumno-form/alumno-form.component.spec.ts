import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALumnoFormComponent } from './alumno-form.component';

describe('ALumnoFormComponent', () => {
  let component: ALumnoFormComponent;
  let fixture: ComponentFixture<ALumnoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALumnoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALumnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
