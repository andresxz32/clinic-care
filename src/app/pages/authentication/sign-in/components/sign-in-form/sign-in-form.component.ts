import {ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RememberMeComponent} from '@pages/authentication/sign-in/components/remember-me/remember-me.component';
import {SignUpActionComponent} from '@pages/authentication/sign-in/components/sign-up-action/sign-up-action.component';
import {PipButtonComponent} from '@ui/atoms/pip-button/pip-button.component';
import {PipInputComponent} from '@ui/atoms/pip-input/pip-input.component';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {
  EMAIL_ERRORS,
  LOGIN_FORM,
  PASSWORD_ERRORS
} from '@pages/authentication/sign-in/core/constants/sign-in-form.constants';
import {SignInService} from '@pages/authentication/sign-in/core/services/sign-in.service';

@Component({
  selector: 'sign-in-form',
  imports: [
    RememberMeComponent,
    SignUpActionComponent,
    PipButtonComponent,
    PipInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnInit {
  protected emailErrors: WritableSignal<ControlErrorMessage[]> = signal(EMAIL_ERRORS);
  protected passwordErrors: WritableSignal<ControlErrorMessage[]> = signal(PASSWORD_ERRORS
  );
  protected showPassword: WritableSignal<boolean> = signal(false);

  protected readonly signInForm: FormGroup;
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _signInService: SignInService = inject(SignInService);

  constructor() {
    this.signInForm = this._formBuilder.group(LOGIN_FORM);
  }

  ngOnInit(): void {
  }

  signIn() {
    console.log('On Sign In');
    if (this.signInForm.invalid) {
      console.log('Invalid form');
      return;
    }
    const {email, password} = this.signInForm.value;
    this._signInService.signIn(email, password);
  }


}
