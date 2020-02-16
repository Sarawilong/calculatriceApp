import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: any;
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
    this.symbol = event;
  }

  pressNumericKeypad(event) {
    const whitespaceRegex = /\s/g;

    this.value = '';
    if (this.symbol === '') {
      this.num1 += event.target.innerHTML;
      this.num1 = this.num1.replace(whitespaceRegex, '');

      return;
    }

    if (this.symbol !== '') {
      this.num2 += event.target.innerHTML;
      this.num2 = this.num2.replace(whitespaceRegex, '');
      console.log('inputValue:', this.num2);
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
          console.log('-');
          break;

        case '/':
          this.value = parseFloat(this.num1) / parseFloat(this.num2);
          console.log('/');
          break;

        case 'x':
          this.value = parseFloat(this.num1) * parseFloat(this.num2);
          console.log('*');
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
    this.value = '';
  }
}
