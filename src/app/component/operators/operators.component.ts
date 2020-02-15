import { Component, Output, EventEmitter } from '@angular/core';

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

  sendOperatorsFn(param) {
    this.sendOperators.emit(param);
  }
}
