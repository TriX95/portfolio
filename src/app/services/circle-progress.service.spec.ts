import { TestBed } from '@angular/core/testing';

import { CircleProgressService } from './circle-progress.service';

describe('CircleProgressService', () => {
  let service: CircleProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
