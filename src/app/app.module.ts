import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PackagesComponent } from './components/packages/packages.component';
import { BooknowComponent } from './components/booknow/booknow.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PackagesComponent,
    BooknowComponent,
    AdminBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Ensure HttpClientModule is imported
    FormsModule
  ],
  providers: [],
  bootstrap: [PackagesComponent]
})
export class AppModule {}
