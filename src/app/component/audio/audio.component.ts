import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  url: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.url='../assets/aseer-a7sn.mp3';
    this.playMusic();
    // const audio = new Audio('assets/asser-a7sn.mp3');
    // audio.play();

  }

  playMusic(){

     const audio = new Audio();
audio.src='../assets/aseer-a7sn.mp3';
audio.load();
    audio.play();
  }
}
