import {Pipe, PipeTransform} from '@angular/core';
import {ControlErrorMessage} from '../models/ui/control-error-message';
import {FormControl} from '@angular/forms';


@Pipe({
  name: 'controlErrorMessage'
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(value: string, errors: ControlErrorMessage[] | undefined, control: FormControl | any): string {
    const foundError = errors?.find(error => control.hasError(error.name));
    if (foundError) {
      return foundError.message;
    }
    return '';
  }

}
