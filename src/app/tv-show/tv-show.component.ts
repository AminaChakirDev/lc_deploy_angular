import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css'],
})
export class TvShowComponent {
  tvShowId!: number;
  currentTvShow!: { poster_path: string; release_date: string };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer le paramètre id
    this.route.params.subscribe((params) => {
      this.tvShowId = parseInt(params['id']);
    });
    this.getTvShowByIdFromService(this.tvShowId);
  }

  getTvShowByIdFromService(id: number) {
    this.apiService
      .getTvShowById(id)
      .subscribe((data) => (this.currentTvShow = data));
  }
}
