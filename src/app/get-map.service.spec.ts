import { TestBed } from '@angular/core/testing';

import { GetMapService } from './get-map.service';

describe('GetMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMapService = TestBed.get(GetMapService);
    expect(service).toBeTruthy();
  });
});
