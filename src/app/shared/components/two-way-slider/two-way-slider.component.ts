import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

export interface RangeValue {
  low: number;
  high: number;
}

@Component({
  selector: 'app-two-way-slider',
  templateUrl: './two-way-slider.component.html',
  styleUrls: ['./two-way-slider.component.scss'],
})
export class TwoWaySliderComponent implements OnInit {
  private _floor = 1;
  get floor() {
    return this._floor;
  }
  @Input() set floor(value) {
    this._floor = value;
    this.lowValue = value;
  }

  private _ceil = 10;
  get ceil() {
    return this._ceil;
  }
  @Input() set ceil(value) {
    if (value <= this.floor) {
      value = this.floor + 1;
    }
    this._ceil = value;
    this.highValue = value;
  }

  @Input() lowValue = this.floor;
  @Input() highValue = this.ceil;

  @Output() valueChange = new EventEmitter<RangeValue>();

  constructor() {}

  ngOnInit(): void {}

  valueChanged() {
    this.valueChange.emit({ low: this.lowValue, high: this.highValue });
  }
}
