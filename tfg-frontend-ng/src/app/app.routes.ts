import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubastasComponent } from './subastas/subastas.component';
import { RegistrarViviendaComponent } from './registrar-vivienda/registrar-vivienda.component';
import { ViviendasUsuarioComponent } from './viviendas-usuario/viviendas-usuario.component';

export const routes: Routes = [

    {
        path: 'home', component:HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'subastas', component: SubastasComponent
    },
    {
        path: 'registrar-vivienda', component: RegistrarViviendaComponent
    },
    {
        path: 'viviendas-usuario', component: ViviendasUsuarioComponent
    }
];
