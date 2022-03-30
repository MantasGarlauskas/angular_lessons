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
  public distance(p: number): number {
    return Math.abs(this.distanceFromOrigin() - p);
  }
}

const p1 = new Point(1, 1);
const p2 = new Point(2, 3);
console.log(p1);
p1.distanceFromOrigin();
p1.translate(1, 1);
console.log(p1);
console.log(p1.distance(p2.distanceFromOrigin()));
