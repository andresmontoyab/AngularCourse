import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']

})
export class LikeComponent {

  @Input('likes-count') likesCount;
  @Input('is-liked') isLiked;
  isActive = true; 


  changeState() {
    this.isActive = !this.isActive
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ?  -1 : +1; 
  }

}
