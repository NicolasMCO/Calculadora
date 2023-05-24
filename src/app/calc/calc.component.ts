import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  input: string = '';

  appendInput(value: string) {
    this.input += value;
  }

  clearInput() {
    this.input = '';
  }

  deleteLastCharacter() {
    this.input = this.input.slice(0, -1);
  }

  calculate() {
    try {
      const result = eval(this.input);
      this.input = result.toString();
    } catch (error) {
      this.input = 'Error';
    }
  }
}
