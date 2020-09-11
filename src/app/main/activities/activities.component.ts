import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/core/models/activity.model';
import { Select, Store } from '@ngxs/store';
import { ActivitiesState } from './activities.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  @Select(ActivitiesState.getSortedActivities) activities$!: Observable<
    Activity
  >;

  constructor(private readonly store: Store) {}

  ngOnInit() {}
}
