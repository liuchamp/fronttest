/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdatemessageService } from './updatemessage.service';

describe('Service: Updatemessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatemessageService]
    });
  });

  it('should ...', inject([UpdatemessageService], (service: UpdatemessageService) => {
    expect(service).toBeTruthy();
  }));
});