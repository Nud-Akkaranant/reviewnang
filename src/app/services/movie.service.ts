import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  nowInTheaters: Movie[] = [
    {
      title: 'Captain America: Brave New World',
      rating: '6.1',
      usersRating: '52K',
      watchlist: '144k',
      imageUrl: 'assets/images/movie-posters/1.jpg',
      director: 'Julius Onah',
      runtime: '1 hour 58 minutes',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      description:
        'Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.',
    },
    {
      title: 'Paddington in Peru',
      rating: '6.8',
      usersRating: '12K',
      watchlist: '37.7k',
      imageUrl: 'assets/images/movie-posters/2.jpg',
      description:
        'Paddington returns to Peru to visit his beloved Aunt Lucy, who now resides at the Home for Retired Bears. With the Brown family in tow, a thrilling adventure ensues when a mystery plunges them into an unexpected journey.',
      director: 'Dougal Wilson',
      runtime: '1 hour 46 minutes',
      genres: ['Adventure', 'Comedy', 'Family', 'Mystery'],
    },
    {
      title: 'Mickey 17',
      rating: '7.4',
      usersRating: '685',
      watchlist: '134k',
      imageUrl: 'assets/images/movie-posters/3.jpg',
      description:
        'Mickey 17, known as an "expendable," goes on a dangerous journey to colonize an ice planet.',
      director: 'Bong Joon Ho',
      runtime: '2 hours 19 minutes',
      genres: ['Adventure', 'Comedy', 'Fantasy', 'Sci-Fi'],
    },
    {
      title: 'The Monkey',
      rating: '6.6',
      usersRating: '6.9k',
      watchlist: '59.2k',
      imageUrl: 'assets/images/movie-posters/4.jpg',
      description:
        "When twin brothers Bill and Hal find their father's old monkey toy in the attic, a series of gruesome deaths start. The siblings decide to throw the toy away and move on with their lives, growing apart over the years.",
      director: 'Osgood Perkins',
      genres: ['Horror'],
      runtime: '1 hour 38 minutes',
    },
    {
      title: 'Dog Man',
      rating: '6.3',
      usersRating: '5k',
      watchlist: '12.2k',
      imageUrl: 'assets/images/movie-posters/5.jpg',
      description:
        'Dog Man, half dog and half man, he is sworn to protect and serve as he doggedly pursues the feline supervillain Petey the Cat.',
      director: 'Peter Hastings',
      genres: [
        'Animation',
        'Action',
        'Adventure',
        'Comedy',
        'Crime',
        'Family',
        'Fantasy',
        'Sci-Fi',
      ],
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

  latestReviews: Review[] = [
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '8.5/10',
      reviewText: `Captain America: Brave New World delivers a solid entry into the MCU, blending political intrigue with classic superhero action. Anthony Mackie steps comfortably into the role of Captain America, showcasing a nuanced portrayal of Sam Wilson as he navigates the complexities of his new mantle. The film excels in exploring the themes of leadership and responsibility, particularly in a post-Blip world where global tensions are high. The narrative skillfully weaves together elements of government conspiracy and personal struggles, providing a compelling backdrop for Sam's journey.
    
        The action sequences are well-choreographed and impactful, though they occasionally lean into familiar MCU tropes. The supporting cast, including [mention a few names if you have them], provides strong performances, adding depth to the narrative. However, the film's pacing falters slightly in the second act, where exposition-heavy dialogue slows down the momentum.
    
        Visually, the film is stunning, with impressive special effects and a color palette that reflects the tone of the story. The score, while not particularly memorable, effectively complements the on-screen action. The film also introduces intriguing new villains who hint at a larger, potentially more sinister plotline, setting up exciting possibilities for future installments.
    
        Overall, Captain America: Brave New World is a worthwhile addition to the MCU, offering a mix of thrilling action and thought-provoking themes. While it may not reach the heights of some of the franchise's best entries, it provides a strong foundation for Sam Wilson's Captain America and leaves audiences eager to see what the future holds for this iconic character.`,
      reviewer: 'MarvelFanatic22',
      timeAgo: '3 minutes ago',
      helpfulCount: 87,
      unhelpfulCount: 5,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '9/10',
      reviewText: `"Brave New World" is a thrilling and thought-provoking chapter in the Captain America saga. Anthony Mackie delivers a powerful performance as Sam Wilson, grappling with the legacy of the shield and the challenges of a changing world. The action sequences are top-notch, and the story explores complex themes with depth and nuance. A must-see for MCU fans!`,
      reviewer: 'CapFan4Life',
      timeAgo: '1 hour ago',
      helpfulCount: 56,
      unhelpfulCount: 2,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '7.5/10',
      reviewText: `While "Brave New World" has its moments of brilliance, it doesn't quite reach the heights of some of the earlier Captain America films. Anthony Mackie is solid as Sam Wilson, but the story feels a bit convoluted at times. The action is good, but not as memorable as in previous installments.`,
      reviewer: 'MovieBuff123',
      timeAgo: '4 hours ago',
      helpfulCount: 23,
      unhelpfulCount: 8,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '8/10',
      reviewText: `Anthony Mackie shines as the new Captain America! "Brave New World" is a solid addition to the MCU, with a compelling story and great action. The film explores important themes and sets up exciting possibilities for the future.`,
      reviewer: 'SuperheroFanatic',
      timeAgo: '1 day ago',
      helpfulCount: 112,
      unhelpfulCount: 4,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
    {
      movieTitle: 'Captain America: Brave New World',
      rating: '6.5/10',
      reviewText: `"Brave New World" is a decent MCU entry, but it didn't fully resonate with me. The story felt a bit predictable, and the action sequences were nothing special. Anthony Mackie is good as Sam Wilson, but the film lacks the emotional depth of some of the other Captain America movies.`,
      reviewer: 'FilmCritic99',
      timeAgo: '2 days ago',
      helpfulCount: 15,
      unhelpfulCount: 12,
      imageUrl: 'assets/images/movie-posters/1.jpg',
    },
  ];

  constructor() { }
}
