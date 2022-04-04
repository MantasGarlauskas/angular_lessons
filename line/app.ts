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
    return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
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

class Line {
  constructor(private _p1: Point, private _p2: Point) {}
  get p1() {
    return this._p1;
  }
  get p2() {
    return this._p2;
  }
  set p1(p1: Point) {
    this._p1 = p1;
  }
  set p2(p2: Point) {
    this._p2 = p2;
  }
  public toString() {
    return this._p1.toString() + this._p2.toString();
  }
  public lineLenght() {
    return Math.sqrt(
      Math.pow(this._p1.x - this._p2.x, 2) +
        Math.pow(this._p1.y - this._p2.y, 2)
    );
  }
}

const p1 = new Point(1, 1);
const p2 = new Point(2, 2);

const line1 = new Line(p1, p2);
console.log(line1.toString());
console.log(line1.lineLenght());
