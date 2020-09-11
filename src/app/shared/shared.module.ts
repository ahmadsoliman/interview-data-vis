import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TwoWaySliderComponent } from './components/two-way-slider/two-way-slider.component';

@NgModule({
  declarations: [BarChartComponent, TwoWaySliderComponent],
  imports: [Ng5SliderModule],
  exports: [BarChartComponent, TwoWaySliderComponent],
})
export class SharedModule {}
