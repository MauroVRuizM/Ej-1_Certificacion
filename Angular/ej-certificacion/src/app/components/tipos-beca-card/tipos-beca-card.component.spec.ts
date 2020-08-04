import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposBecaCardComponent } from './tipos-beca-card.component';

describe('TiposBecaCardComponent', () => {
  let component: TiposBecaCardComponent;
  let fixture: ComponentFixture<TiposBecaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposBecaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposBecaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
