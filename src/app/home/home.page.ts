import { Component, Output } from '@angular/core';

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
  operation = '';

  getChildOperators(event) {
    this.symbol = event;
    this.operation += this.symbol;
    console.log('operator:', event);
  }

  getChildNumbers(event) {
    if (this.symbol === '') {
      this.num1 += event.toString();
      this.operation += this.num1;
      console.log('num1:', this.num1);
      return;
    }

    if (this.symbol !== '') {
      this.num2 += event.toString();
      this.operation += this.num2;
      console.log('num2:', this.num2);
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

      this.operation = this.value.toString();
    }

    this.num1 = this.value.toString();
    this.num2 = '';
    this.symbol = '';
  }

  clear() {
    this.num1 = '';
    this.num2 = '';
    this.symbol = '';
  }


}
