import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from '../shared/zipcode.service';
import { ZipcodeModel } from '../shared/ZipcodeSearchModel';

@Component({
  selector: 'app-zipcode-search',
  templateUrl: './zipcode-search.component.html',
  styleUrls: ['./zipcode-search.component.css']
})
export class ZipcodeSearchComponent implements OnInit {

  searchResult : ZipcodeModel;
  
  constructor(private zipcodeService : ZipcodeService) { }

  ngOnInit() {
  }

  findAdress(form){
    this.zipcodeService.getZipcode(form.value.Postcode, form.value.Huisnummer).subscribe(result => {this.searchResult = result});
  }

  getLatitude() : number {
    return Number(this.searchResult.details[0].lat);
  }

  getLongitude() : number {
    return Number(this.searchResult.details[0].lon);
  }

  clearData(form) {
    this.searchResult = null;
    form.reset();
  }
}
