import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PipCheckboxComponent} from '@ui/atoms/pip-checkbox/pip-checkbox.component';

@Component({
  selector: 'remember-me',
  imports: [
    RouterLink,
    PipCheckboxComponent
  ],
  templateUrl: './remember-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RememberMeComponent {

}
