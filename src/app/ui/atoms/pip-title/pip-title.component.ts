import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'pip-title',
  imports: [],
  templateUrl: './pip-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipTitleComponent {
  title = input('');
}
