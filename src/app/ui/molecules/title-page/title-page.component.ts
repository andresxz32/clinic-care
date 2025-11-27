import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'title-page',
  imports: [],
  templateUrl: './title-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitlePageComponent {
  title: InputSignal<string> = input.required<string>({});
  description: InputSignal<string> = input('')
}
