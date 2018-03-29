import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-maps-display',
  templateUrl: './google-maps-display.component.html',
  styleUrls: ['./google-maps-display.component.css']
})
export class GoogleMapsDisplayComponent implements OnInit {

  @Input()
  lat : number;

  @Input()
  lng : number;

  constructor() { }

  ngOnInit() {
  }
}
