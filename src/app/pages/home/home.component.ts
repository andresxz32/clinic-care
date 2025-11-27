import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {PipAutocompleteComponent} from '@ui/atoms/pip-autocomplete/pip-autocomplete.component';
import {TitlePageComponent} from '@ui/molecules/title-page/title-page.component';
import {ControlErrorMessage} from '@shared/models/ui/control-error-message';
import {CustomValidators} from '@core/validators/CustomValidators';
import {SignInService} from '@pages/authentication/sign-in/core/services/sign-in.service';

@Component({
  selector: 'home',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TitlePageComponent,
    PipAutocompleteComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected passwordErrors: WritableSignal<ControlErrorMessage[]> = signal([
    {
      name: 'required',
      message: 'The field es required.'
    },
    {
      name: 'requiredOption',
      message: 'Select a required option.'
    }
  ]);
  protected readonly testForm: FormGroup;
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _signInService: SignInService = inject(SignInService);

  constructor() {
    this.testForm = this._formBuilder.group({
      test: ['',
        [Validators.required,CustomValidators.requiredOption]
      ],
    });
  }

  ngOnInit(): void {
  }

  signIn() {
    console.log('On Sign In');
    if (this.testForm.invalid) {
      console.log('Invalid form');
      return;
    }

    const {email, password} = this.testForm.value;
    this._signInService.signIn(email, password);
  }
}
