import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ENTRO");
    var videoElement = document.getElementById("videoElement");
    // @ts-ignore
    var flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: "ws://localhost:8000/live/123.flv",
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }

}
