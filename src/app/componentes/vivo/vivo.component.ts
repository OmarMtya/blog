import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import flvjs from 'flv.js';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.scss']
})
export class VivoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.servidor + '/stream').pipe(take(1)).subscribe((x) => {
      if (flvjs.isSupported()) {
        var videoElement: HTMLMediaElement = <HTMLMediaElement>document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: x['server']+'/live/stream.flv?sign=1910072595-5ac3ddbcb62facf35314033c8bfc8198',
        });
        flvPlayer.attachMediaElement(videoElement);
        // videoElement.muted = true;
        flvPlayer.load();
        flvPlayer.play();
      }
    })
  }

}
