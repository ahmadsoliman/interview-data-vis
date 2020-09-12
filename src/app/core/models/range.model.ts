export class RangeValue {
  constructor(public low: number, public high: number) {}

  public static isWithinRange(range: RangeValue, value: number) {
    return value >= range.low && value <= range.high;
  }
}
