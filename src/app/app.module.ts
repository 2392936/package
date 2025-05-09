import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PackagesComponent } from './components/packages/packages.component';
import { BooknowComponent } from './components/booknow/booknow.component';

@NgModule({
  declarations: [
    PackagesComponent,
    BooknowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Ensure HttpClientModule is imported
  ],
  providers: [],
  bootstrap: [PackagesComponent]
})
export class AppModule {}
