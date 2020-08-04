import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposBecaFormComponent } from './tipos-beca-form.component';

describe('TiposBecaFormComponent', () => {
  let component: TiposBecaFormComponent;
  let fixture: ComponentFixture<TiposBecaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposBecaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposBecaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
