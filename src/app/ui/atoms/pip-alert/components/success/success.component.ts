import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {Alert} from '@ui/atoms/pip-alert/core/models/alert';

@Component({
  selector: 'success',
  imports: [],
  templateUrl: './success.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .mat-mdc-snackbar-surface{
      box-shadow: none;
    }
    .mdc-snackbar__label{
      padding: 0;
    }
  `,
})
export class SuccessComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Alert) { }

  ngOnInit(): void {
  }

}
