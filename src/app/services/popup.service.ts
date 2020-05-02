import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export enum PopupType {
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private snackBar: MatSnackBar) {}

  showInfoMessage(message) {
    this.showMessage(message);
  }
  showWarnMessage(message) {
    this.showMessage(message, PopupType.WARN);
  }
  showErrorMessage(message) {
    this.showMessage(message, PopupType.ERROR);
  }

  showMessage(message: string, popupType: PopupType = PopupType.INFO) {
    this.snackBar.open(message, null, {
      duration: 5000,
      panelClass: this.getClassByPopupType(popupType),
    });
  }

  private getClassByPopupType(popupType: PopupType) {
    let classPrefix = 'popup';
    switch (popupType) {
      case PopupType.INFO: {
        return `${classPrefix}-info`;
      }
      case PopupType.ERROR: {
        return `${classPrefix}-error`;
      }
      case PopupType.WARN: {
        return `${classPrefix}-warn`;
      }
      default: {
        return '';
      }
    }
  }
}
