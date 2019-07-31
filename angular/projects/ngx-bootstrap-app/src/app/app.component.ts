import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'assets/images/Interstellar_film_poster.jpg'},
    {image: 'assets/images/intersteller-2.jpg'},
    {image: 'assets/images/Interstellar_film_poster.jpg'},
    {image: 'assets/images/intersteller-2.jpg'},
    {image: 'assets/images/Interstellar_film_poster.jpg'},
    {image: 'assets/images/Interstellar_film_poster.jpg'},
    {image: 'assets/images/intersteller-2.jpg'},
    {image: 'assets/images/Interstellar_film_poster.jpg'},
    {image: 'assets/images/Interstellar_film_poster.jpg'}
  ];
}