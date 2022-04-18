/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnackbarService } from './snack-bar.service';

describe('Service: Snackbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarService]
    });
  });

  it('should ...', inject([SnackbarService], (service: SnackbarService) => {
    expect(service).toBeTruthy();
  }));
});
