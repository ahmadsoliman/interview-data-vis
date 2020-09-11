import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/core/models/activity.model';
import { Select, Store } from '@ngxs/store';
import { ActivitiesState } from './activities.state';
import { Observable } from 'rxjs';
import { FetchActivities } from './activities.actions';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities$ = this.store.select(ActivitiesState.getActivities);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchActivities());
  }
}
