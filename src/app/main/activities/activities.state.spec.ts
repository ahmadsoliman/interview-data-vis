import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import 'jest';

import { ActivitiesMockApiService } from '../../core/api/activities-mock-api.service';
import { ActivitiesState } from './activities.state';
import { FetchActivities } from './activities.actions';
import { Activity } from 'src/app/core/models/activity.model';

describe('ActivitiesState', () => {
  let store: Store;
  // let actions$: Observable<any>;

  function errorWrapper(done: any, body: any) {
    try {
      body();
      done();
    } catch (error) {
      done.fail(error);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NgxsModule.forRoot([ActivitiesState])],
      providers: [ActivitiesMockApiService],
    });
    store = TestBed.get(Store);
    // actions$ = TestBed.get(Actions);
  });

  it('FetchActivities should fetch activities list', (done) => {
    store.dispatch(new FetchActivities());
    store
      .selectOnce(ActivitiesState.getActivities)
      .subscribe((data: Activity[]) => {
        errorWrapper(done, () => {
          expect(data).toEqual(ActivitiesMockApiService.activitiesList);
        });
      });
  });
});
