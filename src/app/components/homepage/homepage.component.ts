import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  nowInTheaters: Movie[] = [
    {
      title: 'Captain America: Brave New World',
      rating: '6.1',
      usersRating: '52K',
      watchlist: '144k',
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      title: 'Paddington in Peru',
      rating: '6.8',
      usersRating: '12K',
      watchlist: '37.7k',
      imageUrl: 'assets/images/movie-posters/2.jpg',
    },
    {
      title: 'Mickey 17',
      rating: '7.4',
      usersRating: '685',
      watchlist: '134k',
      imageUrl: 'assets/images/movie-posters/3.jpg',
    },
    {
      title: 'The Monkey',
      rating: '6.6',
      usersRating: '6.9k',
      watchlist: '59.2k',
      imageUrl: 'assets/images/movie-posters/4.jpg',
    },
    {
      title: 'Dog Man',
      rating: '6.3',
      usersRating: '5k',
      watchlist: '12.2k',
      imageUrl: 'assets/images/movie-posters/5.jpg',
    },
  ];

  upcomingMovies: Movie[] = [
    {
      title: 'I Heart Willie',
      imageUrl: 'assets/images/movie-posters/6.jpg',
      director: 'Alejandro G. Alegre',
      runtime: '1 hour 28 minutes',
      genres: ['Horror'],
      description:
        'An obsessed psychopath unknowingly leads her friends into a deadly mousetrap where pure evil seeks to harvest their skin, in this horrific origin story of the most beloved cartoon character of modern times.',
    },
    {
      title: 'Last Breath',
      imageUrl: 'assets/images/movie-posters/7.jpg',
      director: 'Alex Parkinson',
      runtime: '1 hour 33 minutes',
      genres: ['Drama', 'Thriller'],
      description:
        "A true story that follows seasoned deep-sea divers as they battle the raging elements to rescue their crew mate trapped hundreds of feet below the ocean's surface.",
    },
    {
      title: 'Mobile Suit Gundam GQuuuuuuX: Beginning',
      imageUrl: 'assets/images/movie-posters/8.jpg',
      director: 'Kazuya Tsurumaki',
      runtime: '1 hour 21 minutes',
      genres: ['Animation', 'Action', 'Adventure', 'Drama', 'Sci-Fi'],
      description:
        'In a war between Zeon and Earth Federation, a stolen prototype Gundam vanishes. Years later, a girl with mysterious abilities finds herself piloting a new Gundam in underground mech battles while searching for answers about her powers.',
    },
    {
      title: 'Snow White',
      imageUrl: 'assets/images/movie-posters/9.jpg',
      director: 'Marc Webb',
      runtime: 'TBA',
      genres: ['Adventure', 'Family', 'Fantasy', 'Musical', 'Romance'],
      description:
        "Live-action adaptation of the 1937 Disney animated film 'Snow White and the Seven Dwarfs'",
    },
    {
      title: 'A Minecraft Movie',
      imageUrl: 'assets/images/movie-posters/10.jpg',
      director: 'Jared Hess',
      runtime: '1 hours 41 minutes',
      genres: ['Action', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
      description:
        "Four misfits are suddenly pulled through a mysterious portal into a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a quest with an unexpected, expert crafter.",
    },
  ];

  isLoggedIn: boolean = false;
  currentUser: User | null = null;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserLoggedIn();
    if (this.isLoggedIn) {
      this.currentUser = this.authService.getCurrentUser();
    }
  }
}
