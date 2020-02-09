import { TestBed } from '@angular/core/testing';

import { DataWrapperService } from './data-wrapper.service';

describe('DataWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataWrapperService = TestBed.get(DataWrapperService);
    expect(service).toBeTruthy();
  });
});
