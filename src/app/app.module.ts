import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipcodeSearchComponent } from './zipcode-search/zipcode-search.component';
import { GoogleMapsDisplayComponent } from './google-maps-display/google-maps-display.component';
import { ZipcodeService } from './shared/zipcode.service';
import { AgmCoreModule } from '@agm/core';
import { ZipcodeDetailsComponent } from './zipcode-details/zipcode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeSearchComponent,
    GoogleMapsDisplayComponent,
    ZipcodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBS7zte6AoPPlZtfC8oMKqJjB4ugAlTfs'
    })
  ],
  providers: [ZipcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
