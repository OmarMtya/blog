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
        url: 'https://9cea-2806-2f0-3340-57e1-9cd3-7cc3-245b-ab1b.ngrok.io/live/stream.flv?sign=1910072595-5ac3ddbcb62facf35314033c8bfc8198',
      });
      flvPlayer.attachMediaElement(videoElement);
      // videoElement.muted = true;
      flvPlayer.load();
      flvPlayer.play();
    }
  }

}
