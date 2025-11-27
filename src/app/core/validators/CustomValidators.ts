import {AbstractControl, ValidationErrors} from '@angular/forms';
import {requiredOptionValidator} from '@core/validators/required-option';
import {requiredPhoneNumber} from '@core/validators/required-phone-number';
import {requiredSamePassword} from '@core/validators/required-same-password';

export class CustomValidators {

  static requiredOption(control: AbstractControl): ValidationErrors | null {
    return requiredOptionValidator(control)
  }

  static requiredPhoneNumber(control: AbstractControl): ValidationErrors | null {
    return requiredPhoneNumber(control);
  }

  static requiredSamePassword(control: AbstractControl): ValidationErrors | null {
    return requiredSamePassword(control);
  }
}



