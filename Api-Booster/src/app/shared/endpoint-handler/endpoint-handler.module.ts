import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndpointHandlerFactoryService } from "./endpoint-handler-factory.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EndpointHandlerFactoryService
  ]
})
export class EndpointHandlerModule { }
