import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroFormComponent } from './components/hero-form/hero-form/hero-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'add', component: HeroFormComponent }
];
