import { likeComponent } from './LikeComponentExercise';

let like = new likeComponent(11, true);

like.pressButton();
// Only Readable
console.log(`likeComponent: ${like.numberLike}, isSelected ${like.selected}`);