import { Component } from '@angular/core';
import { trackList } from 'src/app/shared/data/track-list';
import { MultimediaService } from 'src/app/shared/services/multimedia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tracks:any[] = trackList;
  selectedTrack: any = undefined;

  constructor(public multimediaService: MultimediaService){
    this.multimediaService.trackInfo$.subscribe( trackInfo => this.selectedTrack = trackInfo);
  }
  
  play(track:any){
    this.multimediaService.trackInfo$.next(track);
  }
}
