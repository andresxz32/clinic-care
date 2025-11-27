import {
  booleanAttribute, ChangeDetectionStrategy,
  Component,
  forwardRef, Host,
  input,
  InputSignal,
  InputSignalWithTransform,
  OnInit, output, OutputEmitterRef
} from '@angular/core';
import {MatError, MatFormField, MatLabel, MatPrefix} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR, ReactiveFormsModule
} from '@angular/forms';
import {ControlErrorMessagePipe} from '@shared/pipes/control-error-message.pipe';
import {PipIconButtonComponent} from '@ui/atoms/pip-icon-button/pip-icon-button.component';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {Option} from '@shared/models/ui/option';

@Component({
  selector: 'pip-select',
  imports: [
    MatFormField,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    ControlErrorMessagePipe,
    MatError,
    MatPrefix,
    PipIconButtonComponent,
    MatLabel
  ],
  templateUrl: './pip-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PipSelectComponent),
      multi: true
    }
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipSelectComponent implements OnInit, ControlValueAccessor {
  placeholder: InputSignal<string> = input('');
  readonly: InputSignal<boolean> = input(false);
  multiple: InputSignal<boolean> = input(false);
  errors: InputSignal<ControlErrorMessage[] | undefined> = input();
  label: InputSignal<string> = input.required<string>({});
  controlName: InputSignal<string> = input.required<string>({});
  options: InputSignal<Option[]> = input.required<Option[]>();

  prefixIcon: InputSignal<string> = input('')
  prefixButton: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});


  onSuffixClick: OutputEmitterRef<void> = output();

  protected control: FormControl = new FormControl();

  constructor(@Host() private formGroupDirective: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.control = this.formGroupDirective.form.get(this.controlName()) as FormControl || new FormControl();
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.statusChanges.subscribe(fn);
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

}
