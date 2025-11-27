import {ValidatorFn} from '@angular/forms';
import {OptionsSelect} from '@ui/atoms/pip-select/core/option-select';

export interface FormTemplate<T> {
  name: string;
  class: string;
  type: any; //Type html input
  icon?: string;
  label: string;
  value?: string;
  errors?: string;
  validators?: ValidatorFn[];
  placeholder?: string;
  options?: OptionsSelect<T>[];
  field?: 'select' | 'text' | 'textfield' | 'date' | 'webcam' | 'signature' | 'multiselect' | 'dateTime' | 'selectSearch';
}
