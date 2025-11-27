import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'clinic-care';
  envName: WritableSignal<string> = signal(environment.name);
  env: WritableSignal<boolean> = signal(environment.production);
  version: WritableSignal<string> = signal(environment.version);
}
