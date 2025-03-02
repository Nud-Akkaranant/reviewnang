import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.movie = this.getMovieByTitle(title);
    }
  }

  getMovieByTitle(title: string): Movie {
    let allMovies: Movie[] = [
      ...this.movieService.nowInTheaters,
      ...this.movieService.upcomingMovies,
    ];
    const foundMovie = allMovies.find((movie) => movie.title === title);
    if (foundMovie) {
      return foundMovie;
    } else {
      return this.movieService.nowInTheaters[0];
    }
  }
}
