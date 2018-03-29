import { Component, OnInit, Input } from '@angular/core';
import { ZipcodeModel } from '../shared/ZipcodeSearchModel';

@Component({
  selector: 'app-zipcode-details',
  templateUrl: './zipcode-details.component.html',
  styleUrls: ['./zipcode-details.component.css']
})
export class ZipcodeDetailsComponent implements OnInit {

  @Input() 
  searchResult : ZipcodeModel;
  
  constructor() { }

  ngOnInit() {
  }

}
