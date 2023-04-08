import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFilterSidePanelComponent } from './geo-filter-side-panel.component';

describe('GeoFilterSidePanelComponent', () => {
  let component: GeoFilterSidePanelComponent;
  let fixture: ComponentFixture<GeoFilterSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoFilterSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoFilterSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
