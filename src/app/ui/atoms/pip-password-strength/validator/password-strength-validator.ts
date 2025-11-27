import {AbstractControl, ValidatorFn} from '@angular/forms';

export class PasswordStrengthValidator {

  isUndefinedOrEmpty(control: AbstractControl): any | undefined {
    if (!control || !control.value || control.value.length === 0) {
      return undefined;
    }
  }

  validate(criteria: string, regex: RegExp): ValidatorFn {
    const validator = (control: AbstractControl): { [key: string]: any } => {
      this.isUndefinedOrEmpty(control);
      if (!regex.test(control.value)) {
        const failed = {};
        // @ts-ignore
        failed[criteria] = {
          actualValue: control.value,
          requiredPattern: regex
        };
        return failed;
      }
      // @ts-ignore
      return undefined;
    };
    return validator;
  }

  confirm(password: string): ValidatorFn {
    const validator = (control: AbstractControl): { [key: string]: any } => {
      this.isUndefinedOrEmpty(control);
      if (control.value !== password) {
        return {
          notConfirmed: {
            password: password,
            passwordConfirmation: control.value
          }
        }
      }
      // @ts-ignore
      return undefined;
    };
    return validator;
  }

}
