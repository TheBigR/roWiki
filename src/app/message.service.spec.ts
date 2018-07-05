import { TestBed, inject } from '@angular/core/testing';

import {MessageService, NessageService} from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([NessageService], (service: NessageService) => {
    expect(service).toBeTruthy();
  }));
});
