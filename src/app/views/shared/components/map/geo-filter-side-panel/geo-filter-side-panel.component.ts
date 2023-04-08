import { Component } from '@angular/core';

@Component({
  selector: 'app-geo-filter-side-panel',
  templateUrl: './geo-filter-side-panel.component.html',
  styleUrls: ['./geo-filter-side-panel.component.scss'],
})
export class GeoFilterSidePanelComponent {
  showGEOFilter: boolean = false;

  toggleGEOFilter() {
     this.showGEOFilter = !this.showGEOFilter;
  }
}
