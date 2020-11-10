export class Option<T> {
  val?: T;

  constructor(val?: T) {
    this.val = val;
  }

  static none<I>(): Option<I> {
    return new Option();
  }

  static some<I>(val: I): Option<I> {
    return new Option(val);
  }

  isSome(): boolean {
    if (this.val) {
      return true;
    }
    return false;
  }

  isNone(): boolean {
    if (this.val) {
      return false;
    }
    return true;
  }

  map<E>(fn: (value: T) => E): Option<E> {
    if (this.val) {
      return Option.some(fn(this.val));
    }
    return Option.none();
  }

  getOr(defaultValue: T): T {
    if (this.val) {
      return this.val;
    }
    return defaultValue;
  }
}

export function truncateByOne(str: string): string {
  if (str.length === 0) {
    return "";
  }
  return str.slice(str.length, str.length - 1);
}

export function rangeUntil(
  start: number,
  end: number,
  howMany: number
): number[] {
  const arr = [];

  for (let i = start; i < end && arr.length < howMany; i += 1) {
    arr.push(i);
  }

  return arr;
}
