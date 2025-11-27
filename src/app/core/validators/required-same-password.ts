import {AbstractControl, ValidationErrors} from '@angular/forms';

export const requiredSamePassword = (control: AbstractControl): ValidationErrors | null => {
  const password = control.parent?.get('password');
  const confirmPassword = control.parent?.get('confirmPassword');
  return password?.value == confirmPassword?.value ? null : {'requiredSamePassword': true};
};
