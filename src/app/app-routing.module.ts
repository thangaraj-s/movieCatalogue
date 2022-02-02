import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { NodataComponent } from './nodata/nodata.component';


const routes: Routes = [
  { path: '', component: MovieDescriptionComponent },
  { path: 'movieName', redirectTo: '', pathMatch: 'full'},
  { path: 'movieName/:id', component: MovieDescriptionComponent },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
