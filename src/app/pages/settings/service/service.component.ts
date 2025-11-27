import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'service',
  imports: [
    RouterOutlet
  ],
  templateUrl: './service.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent {

}
