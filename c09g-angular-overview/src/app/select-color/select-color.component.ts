import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent implements OnInit {
  color = '#00e067';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(value) {
    this.color = value;
  }
}
