import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { ListUserComponent} from './user/list-user/list-user.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list-user', component: ListUserComponent},
    {path: 'about', component: AboutComponent}
]
