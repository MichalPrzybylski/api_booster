/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EndpointHandlerFactoryService } from './endpoint-handler-factory.service';

describe('EndpointHandlerFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndpointHandlerFactoryService]
    });
  });

  it('should ...', inject([EndpointHandlerFactoryService], (service: EndpointHandlerFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
