import {ChangeDetectionStrategy, Component, input, InputSignal, ViewEncapsulation} from '@angular/core';
import {
  PipListHeader,
  PipListHeaderComponent
} from '@ui/atoms/pip-table/components/pip-list-header/pip-list-header.component';
import {PipListBodyComponent} from '@ui/atoms/pip-table/components/pip-list-body/pip-list-body.component';

@Component({
  selector: 'pip-list',
  imports: [
    PipListHeaderComponent,
    PipListBodyComponent
  ],
  templateUrl: './pip-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipListComponent {
  headers: InputSignal<PipListHeader[] | undefined> = input();
  rows: InputSignal<any[]> = input([{}]);
  columns: InputSignal<any[]> = input([{}]);
}
