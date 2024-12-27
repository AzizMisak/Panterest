import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SavesComponent } from './saves/saves.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }, // Ana Sayfa
    { path: 'about', component: AboutComponent }, // Hakkında Sayfası
    { path: 'saves', component: SavesComponent }, // Hakkında Sayfası
    { path: '**', redirectTo: '' } // Hatalı URL'leri Ana Sayfaya Yönlendir
];
