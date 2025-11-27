import {ChangeDetectionStrategy, Component, input, InputSignal, ViewEncapsulation} from '@angular/core';
import {MatSort, MatSortHeader} from "@angular/material/sort";


export interface PipListHeader {
  id: number;
  type: string,
  class: string
  title: string,
  name: string,
}

@Component({
  selector: 'pip-list-header',
  imports: [
    MatSort,
    MatSortHeader
  ],
  templateUrl: './pip-list-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipListHeaderComponent {
  headers: InputSignal<PipListHeader[] | undefined> = input();
}
