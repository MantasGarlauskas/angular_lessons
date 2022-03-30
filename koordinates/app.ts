class Point {
  constructor(private _x: number, private _y: number) {}

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(x: number) {
    this._x = x;
  }
  set y(y: number) {
    this._y = y;
  }
  public distanceFromOrigin(): number {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }
  public translate(dx: number, dy: number): number {
    return (this._x += dx), (this._y += dy);
  }
  public toString(): string {
    return "[" + this._x + ";" + this._y + "]";
  }
  public distance(p: Point) {
    return Math.sqrt(Math.pow(p.x - this._x, 2) + Math.pow(p.y - this._y, 2));
  }
}

const p1 = new Point(10, 10);
const p2 = new Point(2, 2);
// console.log(p1.distanceFromOrigin());
console.log(p1.distance(p2));
