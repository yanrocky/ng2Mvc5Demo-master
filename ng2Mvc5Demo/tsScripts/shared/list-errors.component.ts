import { Component, Input } from '@angular/core';

import { Errors } from './models/index';

@Component({
  selector: 'list-errors',
  templateUrl: './tsScripts/shared/list-errors.component.html'
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {
      for (let field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  };

  get errorList() { return this.formattedErrors; }


}
