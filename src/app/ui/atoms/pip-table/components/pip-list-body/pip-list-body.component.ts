import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  OnChanges, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {PipIconButtonComponent} from '@ui/atoms/pip-icon-button/pip-icon-button.component';
import {toggleArrowAnimation} from '@core/animations/toggle-arrow.animation';
import {MatIconButton} from '@angular/material/button';
import {PipButtonArrowComponent} from '@ui/atoms/pip-button-arrow/pip-button-arrow.component';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'pip-list-body',
  imports: [
    MatIcon,
    PipButtonArrowComponent,
    MatTooltip,
  ],
  templateUrl: './pip-list-body.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipListBodyComponent implements OnChanges {
  rows: InputSignal<any[]> = input([{}]);
  columns: InputSignal<any[]> = input([{}]);
  selectedRow: any = null;
  private readonly _router: Router = inject(Router);


  showServiceDetail(row: any) {
    if (this.selectedRow == row.id) {
      this.selectedRow = null;
      return;
    }
    this.selectedRow = row.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.rows());
    console.log(this.columns());
  }
}
