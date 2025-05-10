import { Routes } from '@angular/router';

import { BooknowComponent } from './components/booknow/booknow.component';
import { PackagesComponent } from './components/packages/packages.component';
import { ReviewComponent } from './components/reviews/reviews.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';

export const routes: Routes = [
    {
        path:'app-packages',
        component:PackagesComponent
    },
    {
        path:'app-booknow',
        component:BooknowComponent
    },
    {
        path:'app-reviews',
        component:ReviewComponent
    },
    {
        path:'admin-bookings',
        component: AdminBookingsComponent
    }
];
