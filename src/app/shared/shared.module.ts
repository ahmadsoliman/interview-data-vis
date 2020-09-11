import { NgModule } from '@angular/core';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TwoWaySliderComponent } from './components/two-way-slider/two-way-slider.component';

@NgModule({
  declarations: [BarChartComponent, TwoWaySliderComponent],
  imports: [],
  exports: [BarChartComponent, TwoWaySliderComponent],
})
export class SharedModule {}
