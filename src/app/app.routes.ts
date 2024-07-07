import { NgModel } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { TravelpageComponent } from './travelpage/travelpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'search/:searchTerm', component:HomeComponent},
    {path: 'travel/:id', component:TravelpageComponent},
    {path: 'cart-page', component:CartPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}