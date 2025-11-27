import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {Alert} from '@ui/atoms/pip-alert/core/models/alert';

@Component({
  selector: 'information',
  imports: [],
  templateUrl: './information.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: `
    .mat-mdc-snackbar-surface{
      box-shadow: none;
    }
    .mdc-snackbar__label{
      padding: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Alert) { }

  ngOnInit(): void {
  }


}
