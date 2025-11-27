import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'user-button',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserButtonComponent {
  imageUrl:InputSignal<string> = input.required<string>();
}
