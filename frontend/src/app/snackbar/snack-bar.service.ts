import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  addError(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000, panelClass: 'alert-red',
      horizontalPosition: 'center', verticalPosition: 'top'
    })
  }

  addSuccess(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000, panelClass: 'alert-green',
      horizontalPosition: 'center', verticalPosition: 'top'
    })
  }

  addWarning(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000, panelClass: 'alert-warning',
      horizontalPosition: 'center', verticalPosition: 'top'
    })
  }

}
