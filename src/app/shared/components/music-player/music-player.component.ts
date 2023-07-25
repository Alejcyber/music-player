import { Component } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {
  icon = 'play_circle';

  constructor(public multimediaService: MultimediaService){}

  toggleState(){
    this.icon = this.icon === 'play_circle' ? 'pause_circle' : 'play_circle'; 
    this.multimediaService.togglePlayer();
  }
}
