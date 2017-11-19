import { TestBed, inject } from '@angular/core/testing';

import { StoreDataInDbService } from './store-data-in-db.service';

describe('StoreDataInDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreDataInDbService]
    });
  });

  it('should be created', inject([StoreDataInDbService], (service: StoreDataInDbService) => {
    expect(service).toBeTruthy();
  }));
});
