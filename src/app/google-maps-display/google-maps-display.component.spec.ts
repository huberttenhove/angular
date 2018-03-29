import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsDisplayComponent } from './google-maps-display.component';

describe('GoogleMapsDisplayComponent', () => {
  let component: GoogleMapsDisplayComponent;
  let fixture: ComponentFixture<GoogleMapsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
