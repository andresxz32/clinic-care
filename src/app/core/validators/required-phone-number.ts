import {AbstractControl, ValidationErrors} from '@angular/forms';
import {PhoneNumber, PhoneNumberUtil} from 'google-libphonenumber';

export const requiredPhoneNumber = (control: AbstractControl): ValidationErrors | null => {
  const requiredError = {'requiredPhoneNumber': true};
  if (!control.value) {
    return null;
  }

  let number: PhoneNumber;
  try {
    number = PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
  } catch (e) {
    return requiredError;
  }
  if (
    !PhoneNumberUtil.getInstance().isValidNumberForRegion(
      number,
      control.value.countryCode
    )
  ) {
    return requiredError;
  }
  return null;
};
