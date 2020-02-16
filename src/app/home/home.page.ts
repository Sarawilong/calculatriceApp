import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: number;
  num1 = '';
  num2 = '';
  symbol = '';
  numGroups = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0],
  ];

  pressOperatorsKeypad(event) {
    if (this.num1 === '') {
      return;
    }

    this.symbol = event;
  }

  pressNumericKeypad(event) {
    this.value = undefined;
    if (this.symbol === '') {
      this.num1 += event; 

      return;
    }

    if (this.symbol !== '') {
      this.num2 += event;

      return;
    }
  }

  result() {
    if (this.num1 !== '' && this.num2 !== '') {
      switch (this.symbol) {
        case '+':
          this.value = parseFloat(this.num1) + parseFloat(this.num2);
          break;

        case '-':
          this.value = parseFloat(this.num1) - parseFloat(this.num2);
          break;

        case '/':
          this.value = parseFloat(this.num1) / parseFloat(this.num2);
          break;

        case 'x':
          this.value = parseFloat(this.num1) * parseFloat(this.num2);
          break;

        default:
          break;
      }
    }

    this.num1 = '';
    this.num2 = '';
    this.symbol = '';
  }

  clear() {
    this.num1 = '';
    this.num2 = '';
    this.symbol = '';
    this.value = undefined;
  }
}
