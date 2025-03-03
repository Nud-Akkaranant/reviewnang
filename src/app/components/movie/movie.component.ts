import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  activeTab: string = 'overview';
  isLoggedIn: boolean = false;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.movie = this.getMovieByTitle(title);
    }

    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
      this.currentUser = user;
    });
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

  showTab(tabName: string): void {
    this.activeTab = tabName;
  }

  logout(): void {
    this.authService.logout();
  }
}
