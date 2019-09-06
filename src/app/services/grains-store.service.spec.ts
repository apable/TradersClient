import { TestBed } from '@angular/core/testing';

import { GrainsStoreService } from './grains-store.service';

describe('GrainsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrainsStoreService = TestBed.get(GrainsStoreService);
    expect(service).toBeTruthy();
  });
});
