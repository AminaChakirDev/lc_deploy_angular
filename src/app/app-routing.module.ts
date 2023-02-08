import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: 'tvshows',
    component: TvShowsListComponent,
  },
  {
    path: 'movies/:movieId',
    component: MovieComponent,
  },
  {
    path: 'tvshows/:id',
    component: TvShowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
