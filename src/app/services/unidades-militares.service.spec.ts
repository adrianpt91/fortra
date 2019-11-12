import { TestBed } from '@angular/core/testing';

import { UnidadesMilitaresService } from './unidades-militares.service';

describe('UnidadesMilitaresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadesMilitaresService = TestBed.get(UnidadesMilitaresService);
    expect(service).toBeTruthy();
  });
});
