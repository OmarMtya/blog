import { Component } from '@angular/core';
import * as AOS from 'aos/dist/aos.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omarmtya';

  constructor(){
    AOS.init();
  }
}
