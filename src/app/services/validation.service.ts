import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {

  }

  check_if_is_integer(value) {
    return ((parseFloat(value) == parseInt(value)) && !isNaN(value));
  }

  isInteger = (control: FormControl) => {
    return this.check_if_is_integer(control.value) ? null : {
      notNumeric: true
    }
  }

  isNumber(value) {
    return ((parseFloat(value) == parseInt(value)) && !isNaN(value));
  }
}

@Injectable()
export class ValidatorsService {

}