import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movieId!: number;
  currentMovie!: { poster_path: string; release_date: string };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Récupérer le paramètre id
  }

  getMovieByIdFromService(id: number) {
    this.apiService
      .getMovieById(id)
      .subscribe((data) => (this.currentMovie = data));
  }
}
