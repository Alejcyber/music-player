import { Component } from '@angular/core';
import { MultimediaService } from 'src/app/shared/services/multimedia.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(public multimediaService: MultimediaService){}
}
