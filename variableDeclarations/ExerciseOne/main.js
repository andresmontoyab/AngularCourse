"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponentExercise_1 = require("./LikeComponentExercise");
var like = new LikeComponentExercise_1.likeComponent(11, true);
like.pressButton();
// Only Readable
console.log("likeComponent: " + like.numberLike + ", isSelected " + like.selected);
