import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-player';
  links = [
    { title: 'Home', route: 'home' },
    { title: 'Player', route: 'player' }
  ];

  constructor(public route: ActivatedRoute) {}

}
