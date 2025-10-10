import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'game', component: GameComponent },
    { path: 'dictionary', component: DictionaryComponent },
    { path: '**', redirectTo: '' }
];
