import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/core/models/activity.model';
import { Store } from '@ngxs/store';
import { ActivitiesState } from './activities.state';
import {
  FetchActivities,
  SetActivitiesRangeFilter,
} from './activities.actions';
import { RangeValue } from 'src/app/core/models/range.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities$ = this.store.select(ActivitiesState.getActivities);
  activeOccurrencesTotal$ = this.store.select(
    ActivitiesState.getTotalActiveOccurrences
  );
  rangeFilter$ = this.store.select(ActivitiesState.getRangeFilter);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchActivities());
  }

  selectOccurrences(activity: Activity) {
    return activity.occurrences;
  }

  sliderValue(range: RangeValue) {
    this.store.dispatch(new SetActivitiesRangeFilter(range));
  }
}
