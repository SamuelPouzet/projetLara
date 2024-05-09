import { TestBed } from '@angular/core/testing';

import { FieldsetService } from './fieldset.service';

describe('FieldsetService', () => {
  let service: FieldsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
