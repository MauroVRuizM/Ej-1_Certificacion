import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaformComponent } from './materiaform.component';

describe('MateriaformComponent', () => {
  let component: MateriaformComponent;
  let fixture: ComponentFixture<MateriaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
