import {
  booleanAttribute, ChangeDetectionStrategy,
  Component, forwardRef, Host,
  input,
  InputSignal,
  InputSignalWithTransform,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';
import {MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {PipIconButtonComponent} from '@ui/atoms/pip-icon-button/pip-icon-button.component';
import {
  ControlContainer,
  ControlValueAccessor, FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import {ControlErrorMessagePipe} from '@shared/pipes/control-error-message.pipe';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';

@Component({
  selector: 'pip-input',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    MatError,
    PipIconButtonComponent,
    ReactiveFormsModule,
    ControlErrorMessagePipe,
    MatPrefix,
    MatHint
  ],
  templateUrl: './pip-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PipInputComponent),
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
export class PipInputComponent implements OnInit, ControlValueAccessor {
  type: InputSignal<string> = input('');
  placeholder: InputSignal<string> = input('');
  readonly: InputSignal<boolean> = input(false);
  errors: InputSignal<ControlErrorMessage[] | undefined> = input();
  hintStart: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});
  hintEnd: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});
  hintText: InputSignal<string> = input('');

  label: InputSignal<string> = input('');
  controlName: InputSignal<string> = input.required<string>({});

  suffixIcon: InputSignal<string> = input('')
  suffixButton: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});

  prefixIcon: InputSignal<string> = input('')
  prefixButton: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});

  clearButton: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});
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
