import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'logo',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {

}
