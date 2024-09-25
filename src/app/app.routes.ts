import { Routes } from '@angular/router';
import { BikesComponent } from './pages/bikes/bikes.component';
import { LoginComponent } from './pages/login/login.component';
import { BranchComponent } from './pages/branch/branch.component';
import { DescriptionComponent } from './pages/description/description.component';
import { MapComponent } from './pages/map/map.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'branch',
        component: BranchComponent
    },
    {
        path: 'bikes',
        component: BikesComponent
    },
    {
        path: 'description',
        component: DescriptionComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: '**',
        pathMatch: "full",
        component: LoginComponent
    }
];
