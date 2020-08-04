import { TestBed } from '@angular/core/testing';

import { TiposBecaService } from './tipos-beca.service';

describe('TiposBecaService', () => {
  let service: TiposBecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposBecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
