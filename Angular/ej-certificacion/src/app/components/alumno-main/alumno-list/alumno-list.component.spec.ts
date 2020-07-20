import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALumnoListComponent } from './alumno-list.component';

describe('ALumnoListComponent', () => {
  let component: ALumnoListComponent;
  let fixture: ComponentFixture<ALumnoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALumnoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALumnoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
