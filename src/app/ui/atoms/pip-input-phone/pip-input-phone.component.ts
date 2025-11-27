import {
  ChangeDetectionStrategy,
  Component, ElementRef, forwardRef, Host, inject,
  input,
  InputSignal, OnChanges,
  OnInit, signal, SimpleChanges, ViewChild, WritableSignal,
} from '@angular/core';
import {MatError, MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl, FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import {MatOption, MatSelect} from '@angular/material/select';
import {PhoneNumber, PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';
import {NgClass} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {ControlErrorMessagePipe} from '@shared/pipes/control-error-message.pipe';
import {NumbersOnlyDirective} from '@ui/atoms/pip-input-phone/directive/numbers-only.directive';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {ConfirmPasswordErrorStateMatcher} from '@ui/atoms/pip-input-phone/data/custom-error-state-matcher';
import {CountryCode} from '@ui/atoms/pip-input-phone/data/country-code';
import {Country} from '@ui/atoms/pip-input-phone/model/country.model';
import { CountryISO } from './enums/country-iso.enum';

@Component({
  selector: 'pip-input-phone',
  imports: [
    ControlErrorMessagePipe,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgClass,
    OverlayModule,
    MatError,
    NumbersOnlyDirective
  ],
  templateUrl: './pip-input-phone.component.html',
  styleUrls: ['./pip-input-phone.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PipInputPhoneComponent),
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
export class PipInputPhoneComponent implements OnInit, OnChanges, ControlValueAccessor {
  @ViewChild('phoneLabelInput') phoneLabelInput!: ElementRef<HTMLInputElement>;
  @ViewChild('searchCountryInput') searchCountryInput!: ElementRef<HTMLInputElement>;


  //Control
  placeholder: InputSignal<string> = input('');
  readonly: InputSignal<boolean> = input(false);
  errors: InputSignal<ControlErrorMessage[] | undefined> = input();
  label: InputSignal<string> = input.required<string>({});
  controlName: InputSignal<string> = input.required<string>({});
  // @ts-ignore
  preferredCountry: InputSignal<CountryISO> = input(CountryISO.Mexico);

  protected selectedCountry: FormControl = new FormControl({
    areaCodes: undefined,
    dialCode: '',
    htmlId: '',
    flagClass: '',
    iso2: '',
    name: '',
    placeHolder: '',
    priority: 0,
  });
  protected searchCountryControl: FormControl = new FormControl();
  protected isOpen: boolean = false;
  protected matcher = new ConfirmPasswordErrorStateMatcher();
  protected maxLength: WritableSignal<number> = signal(10);

  private readonly countryCodeData: CountryCode = inject(CountryCode);

  //Phone number
  protected allCountries: Array<Country> = [];
  protected allCountriesFiltered: Array<Country> = [];
  protected phoneUtil: any = PhoneNumberUtil.getInstance();
  protected phone!: FormGroup;

  constructor(@Host() private formGroupDirective: FormGroupDirective) {
    this.fetchCountryData();
  }

  ngOnInit(): void {
    this.phone = this.formGroupDirective.form.get(this.controlName()) as FormGroup;
    this.countryFilter();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.preferredCountry()) {
      this.updatePreferredCountry()
    }
  }

  onSelectionChangeCountry(event: any) {
    this.isOpen = !this.isOpen;

    this.searchCountryControl.setValue('');
    this.selectedCountry.setValue(event.source.value);
    this.onPhoneNumberChange();

    this.phoneLabelInput.nativeElement.focus();

    this.calculateNumberMaxLength(event.source.value.iso2);
  }


  openCountryOptions() {
    this.isOpen = !this.isOpen;

    setTimeout(() => {
      if (this.searchCountryInput) {
        this.searchCountryInput.nativeElement.focus();
      }
    });
  }

  private countryFilter() {
    this.allCountriesFiltered = this.allCountries;
    this.searchCountryControl.valueChanges.subscribe(value => {
      if (value === '') {
        this.allCountriesFiltered = this.allCountries;
        return;
      }
      this.allCountriesFiltered = this.allCountries.filter(option => option.name.toLowerCase().includes(value.toLowerCase()));
    });
  }

  registerOnChange(fn: any): void {
    this.phone.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.phone.statusChanges.subscribe(fn);
  }

  writeValue(value: any): void {
    this.phone.setValue(value ?? {});
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.phone.disable() : this.phone.enable();
  }

  protected fetchCountryData(): void {
    this.allCountries = [];

    this.countryCodeData.allCountries.forEach(c => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: (c[4] as string[]) || undefined,
        htmlId: `iti-0__item-${c[1].toString()}`,
        flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
        placeHolder: '',
      };
      this.allCountries = [...this.allCountries, country];
    });

    console.log(this.countryCodeData);
  }

  public onPhoneNumberChange(): void {
    let countryCode: string | undefined;
    let label = this.phone.get('label')?.value
    countryCode = countryCode || this.selectedCountry.value.iso2;
    // @ts-ignore
    const number = this.getParsedNumber(this.phone.get('label')?.value, countryCode);
    countryCode = countryCode ? countryCode : this.selectedCountry.value.iso2;
    if (!label) {
      this.writeValue({label: '', value: {}});
    } else {
      const intlNo = number
        ? this.phoneUtil.format(number, PhoneNumberFormat.INTERNATIONAL)
        : '';
      this.writeValue({
        label: label,
        value: {
          number: label,
          internationalNumber: intlNo,
          nationalNumber: number ? this.phoneUtil.format(number, PhoneNumberFormat.NATIONAL) : '',
          e164Number: number ? this.phoneUtil.format(number, PhoneNumberFormat.E164) : '',
          countryCode: countryCode?.toUpperCase(),
          dialCode: '+' + this.selectedCountry.value.dialCode,
        }
      });
    }
  }

  private getParsedNumber(phoneNumber: string, countryCode: string): PhoneNumber {
    let number: PhoneNumber;
    try {
      number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
    } catch (e) {
    }
    // @ts-ignore
    return number;
  }

  private updatePreferredCountry() {

    const preferredCountry = this.allCountries.find(country => {
      return country.iso2 === this.preferredCountry();
    });
    if (preferredCountry) {
      this.selectedCountry.setValue(preferredCountry);
      this.calculateNumberMaxLength(preferredCountry.iso2);
    }
  }

  private calculateNumberMaxLength(countryCode: string) {
    const metadata = this.phoneUtil.getMetadataForRegion(countryCode);
    const generalDesc = metadata.getGeneralDesc();
    this.maxLength.set(Math.max(...generalDesc.possibleLengthArray()));
  }


}
