import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
  tvShowId!: number;
  currentTvShow!: {};

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    // Récupérer le paramètre id
  }

  getTvShowByIdFromService(id: number) {
    this.apiService
      .getTvShowById(id)
      .subscribe((data) => (this.currentTvShow = data));
  }
}
