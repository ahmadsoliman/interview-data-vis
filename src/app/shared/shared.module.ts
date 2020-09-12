import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { ChartsModule } from 'ng2-charts';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TwoWaySliderComponent } from './components/two-way-slider/two-way-slider.component';

@NgModule({
  declarations: [BarChartComponent, TwoWaySliderComponent],
  imports: [Ng5SliderModule, ChartsModule],
  exports: [BarChartComponent, TwoWaySliderComponent],
})
export class SharedModule {}
