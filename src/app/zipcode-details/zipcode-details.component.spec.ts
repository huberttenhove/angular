import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeDetailsComponent } from './zipcode-details.component';

describe('ZipcodeDetailsComponent', () => {
  let component: ZipcodeDetailsComponent;
  let fixture: ComponentFixture<ZipcodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
