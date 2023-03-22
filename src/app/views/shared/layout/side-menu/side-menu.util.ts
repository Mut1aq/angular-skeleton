import { animate, style, transition, trigger } from '@angular/animations';

export interface NavbarData {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: NavbarData[];
}

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('350ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('350ms', style({ opacity: 0 })),
  ]),
]);

export const navbarData: NavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'bx bx-grid-alt',
    label: 'Dashboard',
  },
  {
    routeLink: 'email-service',
    icon: 'bx bx-envelope',
    label: 'Email Service',
  },

  {
    routeLink: 'statistics',
    icon: 'bx bx-stats',
    label: 'Statistics',
  },

  {
    routeLink: 'pages',
    icon: 'bx bx-file',
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: 'bx bxs-camera-plus',
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: 'bx bx-cog',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile',
      },
      {
        routeLink: 'settings/customize',
        label: 'Customize',
      },
    ],
  },
];
