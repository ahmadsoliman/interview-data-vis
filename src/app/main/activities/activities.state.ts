import { Action, State, StateContext, Selector } from '@ngxs/store';
import { FetchActivities } from './activities.actions';
import { Activity } from 'src/app/core/models/activity.model';
import { ActivitiesMockApiService } from 'src/app/core/api/activities-mock-api.service';
import { Injectable } from '@angular/core';

export interface ActivitesStateModel {
  activities: Activity[];
}

@State<ActivitesStateModel>({
  name: 'activities',
  defaults: {
    activities: [],
  },
})
@Injectable()
export class ActivitiesState {
  constructor(private readonly activitiesApi: ActivitiesMockApiService) {}

  @Selector()
  static getActivities(state: ActivitesStateModel) {
    return state.activities;
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
}
