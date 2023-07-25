import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { 
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {
      this.setAudio(responseOk);
    });
    this.listenAllEvents();
  }

  private listenAllEvents(): void{
    this.audio.addEventListener('timeupdate', this.calculatePercentage, false);
  }

  private calculatePercentage = () => {
    const {duration, currentTime} = this.audio;
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  private setAudio(track: any):void{
    this.audio.src = `assets/tracks/${track.url}`;
    this.audio.play();
  }

  public togglePlayer(): void{
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }
}
