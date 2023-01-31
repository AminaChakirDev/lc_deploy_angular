import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movies: { id: number; poster_path: string; release_date: string }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService() {
    this.apiService
      .getMovies()
      .subscribe((data) => (this.movies = data.results));
  }
}
