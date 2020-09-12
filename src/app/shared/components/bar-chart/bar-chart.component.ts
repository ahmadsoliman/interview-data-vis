import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

import { RangeValue } from 'src/app/core/models/range.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  _data: number[] = [];
  get data() {
    return this._data;
  }
  @Input() set data(value) {
    this._data = [...value];
    this.createChart();
  }

  _activeRange: RangeValue = { low: 0, high: 0 };
  get activeRange() {
    return this._activeRange;
  }
  @Input() set activeRange(value) {
    if (value.low === 0) {
      value = { low: 1, high: 1 };
    }
    this._activeRange = value;
    this.setColors();
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [];
  barChartColors: Color[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ data: this.data, label: '' }];

  @Input() barChartWidth = 900;
  @Input() barChartHeight = 500;

  @Input() activeColor = '#028381';
  @Input() inActiveColor = '#b7b7b7';

  ngOnInit(): void {}

  createChart() {
    this.barChartData[0].data = this.data;
    this.barChartLabels = this.data.map((l) => '');

    this.setColors();
  }

  setColors() {
    this.barChartColors = [
      {
        backgroundColor: this.data.map((_, i) => {
          return i + 1 >= this.activeRange.low && i + 1 <= this.activeRange.high
            ? this.activeColor
            : this.inActiveColor;
        }),
      },
    ];
  }
}
