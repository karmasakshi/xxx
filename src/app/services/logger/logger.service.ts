import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  public constructor() {
    this.logServiceInitialization('LoggerService');
  }

  public logUnknownError(error: unknown): void {
    console.error(error);
  }

  public logError(error: Error): void {
    console.warn(error);
  }

  public logMessage(message: string): void {
    console.log(message);
  }

  public logServiceInitialization(serviceName: string): void {
    console.info(`${serviceName} initialized.`);
  }

  public logComponentInitialization(componentName: string): void {
    console.info(`${componentName} initialized.`);
  }
}
