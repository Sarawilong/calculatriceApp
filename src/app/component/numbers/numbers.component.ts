import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent {
  @Output() sendNumbers: EventEmitter<any> = new EventEmitter();

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
}
