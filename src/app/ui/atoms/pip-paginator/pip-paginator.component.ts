import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";


export interface PipPagination {
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}

@Component({
  selector: 'pip-paginator',
  imports: [
    MatPaginator
  ],
  styles: [
    `
      mat-paginator {
        font-size: 14px;
      }
    `
  ],
  templateUrl: './pip-paginator.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipPaginatorComponent {

}
