import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PipButtonComponent} from '@ui/atoms/pip-button/pip-button.component';

@Component({
  selector: 'app-page-not-found',
  imports: [
    PipButtonComponent
  ],
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {

}
