import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public url = '';
  public url2 = '';
  public constructor(private titleService: Title, private router: Router) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url.split('/')[1];
        this.url2 = event.url.split('/')[2];
        this.url = this.url.replace(/-/g, ' ').toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        this.titleService.setTitle(this.url);
      }
    });
  }
  ngOnInit() {
  }
}
