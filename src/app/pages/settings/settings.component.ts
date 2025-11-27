import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'settings',
    imports: [
        RouterOutlet,
        ReactiveFormsModule,
    ],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

}
