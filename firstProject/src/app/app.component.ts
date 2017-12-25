import { dataOutPut } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : 'app',
    isFavorite : true
  }

  onChangeFavorite(data: dataOutPut) {
    console.log(' The value of favorite is: '+ data.isSelected
                +'\n The value of the year is: ' + data.year 
                +'\n The value of the month is: '+ data.month);
  }
  
}
