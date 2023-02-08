import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movieId!: number;
  currentMovie!: { poster_path: string; release_date: string };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer le paramètre id
    this.route.params.subscribe((params) => {
      this.movieId = parseInt(params['movieId']);
    });
    this.getMovieByIdFromService(this.movieId);
  }

  getMovieByIdFromService(id: number) {
    this.apiService
      .getMovieById(id)
      .subscribe((data) => (this.currentMovie = data));
  }
}
