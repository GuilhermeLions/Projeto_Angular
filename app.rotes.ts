import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gradeaulas } from './pages/gradeaulas/gradeaulas';
import { Tutorial } from './pages/tutorial/tutorial';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'gradeaulas', component: Gradeaulas},
    {path: 'tutorial', component: Tutorial}
];
