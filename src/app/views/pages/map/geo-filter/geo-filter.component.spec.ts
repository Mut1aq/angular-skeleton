import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFilterComponent } from './geo-filter.component';

describe('GeoFilterComponent', () => {
  let component: GeoFilterComponent;
  let fixture: ComponentFixture<GeoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
