"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likeComponent = /** @class */ (function () {
    function likeComponent(_numberLike, _selected) {
        this._numberLike = _numberLike;
        this._selected = _selected;
    }
    likeComponent.prototype.pressButton = function () {
        this._numberLike += (this._selected) ? -1 : 1;
        this._selected = !this._selected;
    };
    Object.defineProperty(likeComponent.prototype, "numberLike", {
        get: function () {
            return this._numberLike;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(likeComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    return likeComponent;
}());
exports.likeComponent = likeComponent;
