import { TestBed } from '@angular/core/testing';

import { MultichoiceService } from './multichoice.service';

describe('MultichoiceService', () => {
  let service: MultichoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultichoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
