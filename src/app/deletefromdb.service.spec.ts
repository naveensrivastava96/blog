import { TestBed, inject } from '@angular/core/testing';

import { DeletefromdbService } from './deletefromdb.service';

describe('DeletefromdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletefromdbService]
    });
  });

  it('should be created', inject([DeletefromdbService], (service: DeletefromdbService) => {
    expect(service).toBeTruthy();
  }));
});
