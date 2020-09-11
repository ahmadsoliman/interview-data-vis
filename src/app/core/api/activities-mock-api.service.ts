import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Activity } from '../models/activity.model';

@Injectable()
export class ActivitiesMockApiService {
  public static activitiesList: Activity[] = [
    new Activity(1, '', 84),
    new Activity(2, '', 14),
    new Activity(3, '', 234),
    new Activity(4, '', 37),
    new Activity(5, '', 54),
    new Activity(6, '', 42),
    new Activity(7, '', 197),
    new Activity(8, '', 11),
  ];

  public getActivties(): Observable<Activity[]> {
    return new Observable((observer) => {
      observer.next(ActivitiesMockApiService.activitiesList);

      return { unsubscribe() {} };
    }).pipe(delay<any>(1000));
  }
}
