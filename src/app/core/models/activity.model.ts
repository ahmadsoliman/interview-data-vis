export class Activity {
  public constructor(
    public id: number,
    public title: string,
    public occurrences: number
  ) {}

  public static createNew(): Activity {
    return new Activity(0, '', 0);
  }
}
