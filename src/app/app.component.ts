import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavToggle } from './core/shared/interfaces/app/side-nav-toggle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  isAuthPage!: boolean;

  constructor(public router: Router) {}
  ngOnInit(): void {}

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
