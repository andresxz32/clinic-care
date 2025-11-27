import {
  booleanAttribute, ChangeDetectionStrategy,
  Component, forwardRef, Host,
  input,
  InputSignal,
  InputSignalWithTransform,
  OnInit, output,
  OutputEmitterRef
} from '@angular/core';
import {MatError, MatFormField, MatLabel, MatPrefix, MatSuffix} from '@angular/material/form-field';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {AsyncPipe} from '@angular/common';
import {map, Observable, of, startWith} from 'rxjs';
import {PipIconButtonComponent} from '@ui/atoms/pip-icon-button/pip-icon-button.component';
import {ControlErrorMessagePipe} from '@shared/pipes/control-error-message.pipe';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {Option} from '@shared/models/ui/option';

@Component({
  selector: 'pip-autocomplete',
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatAutocomplete,
    MatSuffix,
    PipIconButtonComponent,
    MatOption,
    MatPrefix,
    MatAutocompleteTrigger,
    AsyncPipe,
    ControlErrorMessagePipe,
    MatError
  ],
  templateUrl: './pip-autocomplete.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PipAutocompleteComponent),
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
export class PipAutocompleteComponent implements OnInit, ControlValueAccessor {
  placeholder: InputSignal<string> = input('');
  readonly: InputSignal<boolean> = input(false);
  errors: InputSignal<ControlErrorMessage[] | undefined> = input();

  label: InputSignal<string> = input.required<string>({});
  controlName: InputSignal<string> = input.required<string>({});


  prefixIcon: InputSignal<string> = input('')
  prefixButton: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});

  clearButton: InputSignalWithTransform<boolean, unknown> = input(false, {transform: booleanAttribute});
  onSuffixClick: OutputEmitterRef<void> = output();


  options: InputSignal<Option[]> = input.required<Option[]>();
  filteredOptions: Observable<Option[]> = of([]);

  protected control: FormControl = new FormControl();

  constructor(@Host() private formGroupDirective: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.control = this.formGroupDirective.form.get(this.controlName()) as FormControl || new FormControl();

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string | Option): Option[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return this.options().filter(option => option.label.toLowerCase().includes(filterValue));
    }
    return this.options();

  }

  displayFn(option: Option): string {
    return option && option.label ? option.label : '';
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
