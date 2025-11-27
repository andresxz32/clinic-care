import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatPrefix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'pip-search-input',
  imports: [
    FormsModule,
    MatFormField,
    MatIcon,
    MatInput,
    MatPrefix
  ],
  styles: [`
    :host ::ng-deep .mdc-text-field--outlined {
      --mdc-outlined-text-field-container-shape: 28px !important;
    }`],
  templateUrl: './pip-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSearchInputComponent {

}
