import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { catchError } from "rxjs/operators/catchError";
import { HttpHeaders } from '@angular/common/http';
import { ZipcodeModel } from './ZipcodeSearchModel';

@Injectable()
export class ZipcodeService {

  url : string = 'http://api.postcodedata.nl/v1/postcode/?postcode=#####&streetnumber=$$$$$&ref=domain.nl&type.json';

  constructor(private http : HttpClient) { }

  getZipcode(zipcode : string, number : string) : Observable<ZipcodeModel>{
    return this.http.get<ZipcodeModel>(this.url.replace('#####',zipcode).replace('$$$$$',number));
  }
}
