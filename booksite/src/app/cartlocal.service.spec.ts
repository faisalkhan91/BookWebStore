import { TestBed } from '@angular/core/testing';

import { CartlocalService } from './cartlocal.service';

describe('CartlocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartlocalService = TestBed.get(CartlocalService);
    expect(service).toBeTruthy();
  });
});
