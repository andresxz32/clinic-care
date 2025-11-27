import {Validators} from '@angular/forms';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';

// export const PASSWORD_REGEX: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const PASSWORD_REGEX: RegExp = RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_{|}~"])/);
export const LOGIN_FORM = {
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX), Validators.maxLength(20)]],
}

export const EMAIL_ERRORS: ControlErrorMessage[] = [
  {
    name: 'email',
    message: 'Please enter a valid email address'
  },
  {
    name: 'required',
    message: 'Please enter a valid email address'
  }
];

export const PASSWORD_ERRORS: ControlErrorMessage[] = [
  {
    name: 'required',
    message: 'Please enter a valid password'
  },
  {
    name: 'pattern',
    message: 'Please enter a valid password'
  },
  {
    name: 'maxlength',
    message: 'The maximum of password is 20 characters'
  },


];


