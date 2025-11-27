import {
  ChangeDetectionStrategy,
  Component,
  inject, input, InputSignal,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormTemplate} from '@ui/templates/form-template/core/form-template';
import {PipInputComponent} from '@ui/atoms/pip-input/pip-input.component';

@Component({
  selector: 'form-template',
  imports: [
    ReactiveFormsModule,
    PipInputComponent
  ],
  templateUrl: './form-template.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTemplateComponent implements OnInit, OnChanges {
  form: InputSignal<FormTemplate<any>[]> = input.required<FormTemplate<any>[]>();

  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  public templateFormGroup!: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    const form = {};
    console.log(this.form());
    this.form().forEach((control) => {
      // @ts-ignore
      form[control.name] = ['', control.validators];
    });
    this.templateFormGroup = this._formBuilder.group(form);

  }

  ngOnInit(): void {
  }
}
