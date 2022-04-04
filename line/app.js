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
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
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
class Line {
    constructor(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    get p1() {
        return this._p1;
    }
    get p2() {
        return this._p2;
    }
    set p1(p1) {
        this._p1 = p1;
    }
    set p2(p2) {
        this._p2 = p2;
    }
    toString() {
        return this._p1.toString() + this._p2.toString();
    }
    lineLenght() {
        return Math.sqrt(Math.pow(this._p1.x - this._p2.x, 2) +
            Math.pow(this._p1.y - this._p2.y, 2));
    }
}
const p1 = new Point(1, 1);
const p2 = new Point(2, 2);
const line1 = new Line(p1, p2);
console.log(line1.toString());
console.log(line1.lineLenght());
