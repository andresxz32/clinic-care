import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {FormTemplateComponent} from '@ui/templates/form-template/form-template.component';
import {FormTemplate} from '@ui/templates/form-template/core/form-template';

@Component({
  selector: 'service-detail',
  imports: [
    ReactiveFormsModule,
    FormTemplateComponent
  ],
  templateUrl: './service-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceDetailComponent {

formFields: FormTemplate<any>[] = [
  {
    name: 'nombre',
    class: 'form-control',
    type: 'text',
    label: 'Nombre',
    value: '',
    validators: [Validators.required, Validators.minLength(3)],
    placeholder: 'Ingrese su nombre',
    field: 'text'
  },
  {
    name: 'correo',
    class: 'form-control',
    type: 'email',
    label: 'Correo Electrónico',
    value: '',
    validators: [Validators.required, Validators.email],
    placeholder: 'Ingrese su correo electrónico',
    field: 'text'
  },
  {
    name: 'fechaNacimiento',
    class: 'form-control',
    type: 'date',
    label: 'Fecha de Nacimiento',
    value: '',
    validators: [Validators.required],
    placeholder: 'Seleccione su fecha de nacimiento',
    field: 'date'
  },
  {
    name: 'genero',
    class: 'form-control',
    type: 'select',
    label: 'Género',
    value: '',
    validators: [Validators.required],
    placeholder: 'Seleccione su género',
    options: [
      { value: 'masculino', viewValue: 'Masculino' },
      { value: 'femenino', viewValue: 'Femenino' },
      { value: 'otro', viewValue: 'Otro' }
    ],
    field: 'select'
  },
  {
    name: 'biografia',
    class: 'form-control',
    type: 'textarea',
    label: 'Biografía',
    value: '',
    validators: [Validators.maxLength(500)],
    placeholder: 'Cuéntanos sobre ti',
    field: 'textfield'
  }
];


}
