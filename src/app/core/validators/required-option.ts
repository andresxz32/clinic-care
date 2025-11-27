import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function requiredOptionValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return {'requiredOption': true};
  return control.value.value ? null : {'requiredOption': true};
}
