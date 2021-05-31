import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "omarmtya";
  private wowSubscription: Subscription;
  constructor(
    private router: Router,
    private wowService: NgwWowService,
  ) {
    this.wowService.init();
    // subscribe to cookieconsent observables to react to main events
  }
}
