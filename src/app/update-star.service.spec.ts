import { TestBed, inject } from '@angular/core/testing';

import { UpdateStarService } from './update-star.service';

describe('UpdateStarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateStarService]
    });
  });

  it('should be created', inject([UpdateStarService], (service: UpdateStarService) => {
    expect(service).toBeTruthy();
  }));
});
