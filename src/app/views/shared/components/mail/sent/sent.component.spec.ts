import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentComponent } from './sent.component';

describe('SentComponent', () => {
  let component: SentComponent;
  let fixture: ComponentFixture<SentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
