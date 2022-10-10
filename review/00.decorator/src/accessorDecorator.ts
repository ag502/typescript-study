function protpertyDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @protpertyDecorator
  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}
