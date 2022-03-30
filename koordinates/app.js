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
        return Math.sqrt(Math.pow(p.x - this._x, 2) + Math.pow(p.y - this._y, 2));
    }
}
const p1 = new Point(10, 10);
const p2 = new Point(2, 2);
// console.log(p1.distanceFromOrigin());
console.log(p1.distance(p2));
