import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  FetchActivities,
  SetActivitiesRangeFilter,
} from './activities.actions';
import { Activity } from 'src/app/core/models/activity.model';
import { ActivitiesMockApiService } from 'src/app/core/api/activities-mock-api.service';
import { Injectable } from '@angular/core';
import { RangeValue } from 'src/app/core/models/range.model';

export interface ActivitesStateModel {
  activities: Activity[];
  rangeFilter: RangeValue;
}

@State<ActivitesStateModel>({
  name: 'activities',
  defaults: {
    activities: [],
    rangeFilter: { low: 0, high: 0 },
  },
})
@Injectable()
export class ActivitiesState {
  constructor(private readonly activitiesApi: ActivitiesMockApiService) {}

  @Selector()
  static getActivities(state: ActivitesStateModel) {
    return state.activities;
  }

  @Selector()
  static getRangeFilter(state: ActivitesStateModel) {
    return state.rangeFilter;
  }

  @Selector()
  static getTotalActiveOccurrences(state: ActivitesStateModel) {
    let total = 0;
    state.activities.map((activity, index) => {
      if (RangeValue.isWithinRange(state.rangeFilter, index + 1)) {
        total += activity.occurrences;
      }
    });
    return total;
  }

  @Action(FetchActivities)
  fetchActivities(ctx: StateContext<ActivitesStateModel>) {
    this.activitiesApi.getActivties().subscribe((activities: Activity[]) => {
      ctx.patchState({
        activities: activities.sort((a, b) =>
          a.occurrences > b.occurrences ? -1 : 1
        ),
      });
    });
  }

  @Action(SetActivitiesRangeFilter)
  setActivitiesRangeFilter(
    ctx: StateContext<ActivitesStateModel>,
    action: SetActivitiesRangeFilter
  ) {
    ctx.patchState({
      rangeFilter: action.range,
    });
  }
}
