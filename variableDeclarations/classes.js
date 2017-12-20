var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ..
    };
    return Point;
}());
var point = new Point();
point.x = 2;
point.y = 5;
point.draw();
