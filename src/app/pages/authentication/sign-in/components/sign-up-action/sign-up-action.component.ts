import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'sign-up-action',
  imports: [
    RouterLink
  ],
  templateUrl: './sign-up-action.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpActionComponent {

}
