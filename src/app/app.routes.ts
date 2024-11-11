import { RouterModule, Routes } from '@angular/router';
import { Dash2Component } from './dash2/dash2.component';
import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [
{path: '' , redirectTo: 'dash1' , pathMatch: 'full' },
{path: 'dash1' , component: CardsComponent},
{path: 'dash2', component: Dash2Component }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRouting {}
