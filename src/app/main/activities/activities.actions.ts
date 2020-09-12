import { RangeValue } from 'src/app/core/models/range.model';

export class FetchActivities {
  static type = '[API] FetchActivities';
}

export class SetActivitiesRangeFilter {
  static type = '[UI] SetActivitiesRangeFilter';
  constructor(public range: RangeValue) {}
}
