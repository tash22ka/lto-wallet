import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { LTO_PUBLIC_API } from '@legalthings-one/platform';
import { AMOUNT_DIVIDER } from '@legalthings-one/component-kit';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LTO_PUBLIC_API,
      useValue: environment.lto_api_url
    },
    {
      provide: AMOUNT_DIVIDER,
      useValue: 100000000
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
