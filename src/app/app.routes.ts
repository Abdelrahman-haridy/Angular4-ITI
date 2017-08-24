import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';


export const appRoot: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'albums/:id',
        component: AlbumsComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];






























// import { RouterModule, Routes } from '@angular/router';


// export const appR: Routes = [
//     {
//         path: 'home',
//         component: HomeComponent
//     },
//     {
//         path: '**',
//         component: HomeComponent
//     }
// ];
