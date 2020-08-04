import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposBecaListComponent } from './tipos-beca-list.component';

describe('TiposBecaListComponent', () => {
  let component: TiposBecaListComponent;
  let fixture: ComponentFixture<TiposBecaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposBecaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposBecaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
