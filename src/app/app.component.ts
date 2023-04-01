import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from './core/shared/interfaces/app/side-nav-toggle.interface';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  showSideMenu: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.listenToRouteEvents();
  }

  listenToRouteEvents(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSideMenu = event.url !== '/auth/login';
      }
    });
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
