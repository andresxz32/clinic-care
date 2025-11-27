import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SuccessComponent} from '@ui/atoms/pip-alert/components/success/success.component';
import {ErrorComponent} from '@ui/atoms/pip-alert/components/error/error.component';
import {WarningComponent} from '@ui/atoms/pip-alert/components/warning/warning.component';
import {InformationComponent} from '@ui/atoms/pip-alert/components/information/information.component';
import {Alert} from '@ui/atoms/pip-alert/core/models/alert';

@Injectable({
  providedIn: 'root'
})
export class PipAlertService {
  private readonly _snackBar: MatSnackBar = inject(MatSnackBar);

  showSuccess({
                message,
                description = '',
                horizontalPosition = 'center',
                verticalPosition = 'bottom',
                duration = 3000,
              }: Alert) {
    this._snackBar.openFromComponent(SuccessComponent, {
      data: {
        message,
        description,
      },
      horizontalPosition,
      verticalPosition,
      duration,
      panelClass: ["bg-slate-100", "py-4", "max-h-40", "px-6", "max-w-md", "border-l-4", "border-green-600", "rounded-lg", "flex", "items-center", "gap-3", "shadow-lg"],
    });
  }

  showError({
              message,
              description = '',
              horizontalPosition = 'center',
              verticalPosition = 'bottom',
              duration = 3000,
            }: Alert) {
    this._snackBar.openFromComponent(ErrorComponent, {
      data: {
        message,
        description,
      },
      horizontalPosition,
      verticalPosition,
      duration,
      panelClass: ["bg-slate-100", "py-4", "max-h-40", "px-6", "max-w-md", "border-l-4", "border-red-600", "rounded-lg", "flex", "items-center", "gap-3", "shadow-lg"],
    });
  }

  showWarning({
                message,
                description = '',
                horizontalPosition = 'center',
                verticalPosition = 'bottom',
                duration = 3000,
              }: Alert) {
    this._snackBar.openFromComponent(WarningComponent, {
      data: {
        message,
        description,
      },
      horizontalPosition,
      verticalPosition,
      duration,
      panelClass: ["bg-slate-100", "py-4", "max-h-40", "px-6", "max-w-md", "border-l-4", "border-yellow-600", "rounded-lg", "flex", "items-center", "gap-3", "shadow-lg"],
    });
  }

  showInfo({
             message,
             description = '',
             horizontalPosition = 'center',
             verticalPosition = 'bottom',
             duration = 3000000,
           }: Alert) {
    this._snackBar.openFromComponent(InformationComponent, {
      data: {
        message,
        description,
      },
      horizontalPosition,
      verticalPosition,
      duration,
      panelClass: ["bg-white", "py-4", "max-h-40", "px-6", "max-w-md", "border-l-4", "border-sky-600", "rounded-lg", "flex", "items-center", "gap-3", "shadow-lg"],
    });
  }

}
