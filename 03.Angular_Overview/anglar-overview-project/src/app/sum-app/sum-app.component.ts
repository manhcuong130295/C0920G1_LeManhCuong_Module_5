import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sum-app',
  templateUrl: './sum-app.component.html',
  styleUrls: ['./sum-app.component.css']
})
export class SumAppComponent implements OnInit {
  number1: number;
  number2: number;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum() {
    this.result = Number(this.number1) + Number(this.number2);
  }

  sub() {
    this.result = Number(this.number1) - Number(this.number2);
  }

  mul() {
    this.result = Number(this.number1) * Number(this.number2);
  }

  div() {
    this.result = Number(this.number1) / Number(this.number2);
  }

  getValueNumber1(value: number): void{
    this.number1 = value;
  }

  getValueNumber2(value: number): void {
    this.number2 = value;
  }
}
