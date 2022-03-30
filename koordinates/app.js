"use strict";
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    distanceFromOrigin() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
    translate(dx, dy) {
        return (this._x += dx), (this._y += dy);
    }
    toString() {
        return "[" + this._x + ";" + this._y + "]";
    }
    distance(p) {
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
