import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Activity } from '../models/activity.model';

@Injectable()
export class ActivitiesMockApiService {
  public static activitiesList = [];

  public getActivties(): Observable<Activity[]> {
    return new Observable((observer) => {
      observer.next(ActivitiesMockApiService.activitiesList);

      return { unsubscribe() {} };
    }).pipe(delay<any>(1000));
  }
}
