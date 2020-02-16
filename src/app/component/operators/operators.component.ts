import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

import { CalculateFunctionsService } from '../../services/calculate-functions.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent {
  @Output() sendOperators: EventEmitter<any> = new EventEmitter();

  operators = [
    '+',
    '-',
    '/',
    '*',
  ];

  constructor(
    private calculateFunctionsService: CalculateFunctionsService,
  ) {}

  sendOperatorsFn(param) {
    this.sendOperators.emit(param);
  }

  // getResult() {
  //   this.calculateFunctionsService.getResult();
  // }
}
