// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CalculateFunctionsService {

//   /**
//    * param number result
//    */
//   value: number;

//   /**
//    * param string 
//    */
//   num1 = '';
//   num2 = '';
//   symbol = '';
//   operation = '';

//   /**
//    * Get operators from operators component
//    *
//    * @param event operators
//    */
//   getChildOperators(event) {
//     this.symbol = event;
//     this.operation += this.symbol;
//     console.log('operator:', event);
//   }

//   /**
//    * Get numbers from numbers component
//    * @param event number
//    */
//   getChildNumbers(event) {
//     if (this.symbol === '') {
//       this.num1 += event.toString();
//       this.operation += this.num1;
//       console.log('num1:', this.num1);
//       return;
//     }

//     if (this.symbol !== '') {
//       this.num2 += event.toString();
//       this.operation += this.num2;
//       console.log('num2:', this.num2);
//       return;
//     }
//   }

//   /**
//    * Method used to get the result
//    */
//   getResult(num1, num2, value, symbol) {
//     if (this.num1 !== '' && this.num2 !== '') {
//       switch (this.symbol) {
//         case '+':
//           this.value = parseFloat(this.num1) + parseFloat(this.num2);
//           break;

//         case '-':
//           this.value = parseFloat(this.num1) - parseFloat(this.num2);
//           console.log('-');
//           break;

//         case '/':
//           this.value = parseFloat(this.num1) / parseFloat(this.num2);
//           console.log('/');
//           break;

//         case 'x':
//           this.value = parseFloat(this.num1) * parseFloat(this.num2);
//           console.log('*');
//           break;

//         default:
//           break;
//       }

//       this.operation = this.value.toString();
//     }

//     this.num1 = this.value.toString();
//     this.num2 = '';
//     this.symbol = '';
//   }

//   /**
//    * Method used to clear all
//    */
//   clear() {
//     this.num1 = '';
//     this.num2 = '';
//     this.symbol = '';
//   }
// }
