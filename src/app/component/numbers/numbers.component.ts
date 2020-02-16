import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

import { CalculateFunctionsService } from '../../services/calculate-functions.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent {
  @Output() sendNumbers: EventEmitter<any> = new EventEmitter();

  constructor(
    private calculateFunctionsService: CalculateFunctionsService,
  ) {}

  value = 0;
  numGroups = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.'],
  ];


  sendNumFn(num) {
  this.sendNumbers.emit(num);
  }

  clear() {
    this.calculateFunctionsService.clear();
  }
}
