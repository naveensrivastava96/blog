import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { BlogDivComponent } from './blog-div/blog-div.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import{HttpModule} from "@angular/http";
import {StoreDataInDbService} from "./store-data-in-db.service";
import {UpdateStarService} from "./update-star.service";
import { RouterModule, Routes } from '@angular/router';
import {DeletefromdbService} from "./deletefromdb.service"
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';
import { CategoryComponent } from './category/category.component';
//import {RoutingModule} from "./routing/routing.module";


const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  { path: 'update/:id', component: UpdatepageComponent }
  // { path: 'delete', component: BlogDivComponent }
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    BodyComponent,
    BlogDivComponent,
    StarRatingComponent,
    HomePageComponent,
    UpdatepageComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(routes,
      { enableTracing: false } ),


  ],
  providers: [StoreDataInDbService, UpdateStarService, DeletefromdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
