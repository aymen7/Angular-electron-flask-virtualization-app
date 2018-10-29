import { TestBed } from '@angular/core/testing';

import { VirtualizationService } from './virtualization.service';

describe('VirtualizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirtualizationService = TestBed.get(VirtualizationService);
    expect(service).toBeTruthy();
  });
});
