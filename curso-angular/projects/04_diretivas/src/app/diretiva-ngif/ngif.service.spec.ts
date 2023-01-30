import { TestBed } from '@angular/core/testing';

import { NgifService } from './ngif.service';

describe('NgifService', () => {
  let service: NgifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
