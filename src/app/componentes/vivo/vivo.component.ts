import { Component, OnInit } from '@angular/core';
import flvjs from 'flv.js';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.scss']
})
export class VivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (flvjs.isSupported()) {
      var videoElement: HTMLMediaElement = <HTMLMediaElement>document.getElementById('videoElement');
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://155.138.240.226:8000/live/stream.flv?sign=1910072595-5ac3ddbcb62facf35314033c8bfc8198'
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }

}
