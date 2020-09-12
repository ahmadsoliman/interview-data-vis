import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RangeValue } from 'src/app/core/models/range.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
    this.valueChanged();
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
    this.valueChanged();
  }

  @Input() lowValue = this.floor;
  @Input() highValue = this.ceil;

  @Output() valueChange = new EventEmitter<RangeValue>();

  subject: Subject<RangeValue> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.subject.pipe(debounceTime(100)).subscribe((rangeValue: RangeValue) => {
      this.valueChange.emit(rangeValue);
    });
  }

  valueChanged() {
    const rangeValue: RangeValue = { low: this.lowValue, high: this.highValue };
    this.subject.next(rangeValue);
  }
}
