import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PipTitleComponent} from '@ui/atoms/pip-title/pip-title.component';
import {LogoComponent} from '@ui/molecules/logo/logo.component';
import {SignInFormComponent} from '@pages/authentication/sign-in/components/sign-in-form/sign-in-form.component';
@Component({
  selector: 'app-sign-in',
  imports: [
    PipTitleComponent,
    LogoComponent,
    SignInFormComponent
  ],
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {

}
