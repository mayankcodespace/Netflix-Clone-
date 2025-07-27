import  { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    image: 'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'TV Show',
    year: 2016,
    rating: 'TV-14',
    duration: '4 Seasons',
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    trending: true,
    match: 98,
    new: false
  },
  {
    id: '2',
    title: 'The Queen\'s Gambit',
    description: 'In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.',
    image: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw3fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'Limited Series',
    year: 2020,
    rating: 'TV-MA',
    duration: '1 Season',
    genres: ['Drama'],
    trending: true,
    match: 95,
    new: false
  },
  {
    id: '3',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family\'s future.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'TV Show',
    year: 2008,
    rating: 'TV-MA',
    duration: '5 Seasons',
    genres: ['Crime', 'Drama', 'Thriller'],
    trending: false,
    match: 92,
    new: false
  },
  {
    id: '4',
    title: 'The Crown',
    description: 'Based on historical events, this series dramatizes the story of Queen Elizabeth II and the political and personal events that shaped her reign.',
    image: 'https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxMHx8bmV0ZmxpeCUyMG1vdmllJTIwcG9zdGVycyUyMGNpbmVtYXRpYyUyMGRhcmt8ZW58MHx8fHwxNzQ3NzQ3MzUwfDA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'TV Show',
    year: 2016,
    rating: 'TV-MA',
    duration: '4 Seasons',
    genres: ['Drama', 'History'],
    trending: false,
    match: 88,
    new: false
  },
  {
    id: '5',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
    image: 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'TV Show',
    year: 2019,
    rating: 'TV-MA',
    duration: '2 Seasons',
    genres: ['Fantasy', 'Action', 'Adventure'],
    trending: true,
    match: 96,
    new: true
  },
  {
    id: '6',
    title: 'Money Heist',
    description: 'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
    image: 'https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'TV Show',
    year: 2017,
    rating: 'TV-MA',
    duration: '5 Parts',
    genres: ['Crime', 'Drama', 'Thriller'],
    trending: true,
    match: 94,
    new: false
  },
  {
    id: '7',
    title: 'Dark Waters',
    description: 'A corporate defense attorney takes on an environmental lawsuit against a chemical company that exposes a lengthy history of pollution.',
    image: 'https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'Movie',
    year: 2022,
    rating: 'R',
    duration: '2h 7m',
    genres: ['Drama', 'Thriller', 'Biography'],
    trending: false,
    match: 91,
    new: true
  },
  {
    id: '8',
    title: 'The Hunt',
    description: 'A group of elites gather to hunt humans for sport. But one of the hunted, Crystal, turns the tables on the killers, picking them off one by one.',
    image: 'https://images.unsplash.com/photo-1530090382228-7195e08d7a75?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw4fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'Movie',
    year: 2021,
    rating: 'R',
    duration: '1h 55m',
    genres: ['Action', 'Horror', 'Thriller'],
    trending: true,
    match: 85,
    new: true
  },
  {
    id: '9',
    title: 'Director\'s Cut',
    description: 'A visionary director struggles to complete his masterpiece amid studio interference, personal demons, and a deteriorating mental state.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw5fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'Movie',
    year: 2021,
    rating: 'R',
    duration: '2h 15m',
    genres: ['Drama', 'Thriller'],
    trending: false,
    match: 89,
    new: true
  },
  {
    id: '10',
    title: 'Bloom',
    description: 'After a mysterious event, rare flowers begin to grow that can restore youth—but with deadly consequences that threaten to reshape humanity.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280',
    category: 'Movie',
    year: 2023,
    rating: 'TV-MA',
    duration: '2h 23m',
    genres: ['Sci-Fi', 'Horror', 'Drama'],
    trending: true,
    match: 97,
    new: true
  }
];

// Group movies by category for browse page
export const groupedMovies = {
  trending: movies.filter(movie => movie.trending),
  popular: [movies[2], movies[4], movies[1], movies[5], movies[0], movies[3]],
  newReleases: movies.filter(movie => movie.new),
  watchAgain: [movies[3], movies[0], movies[5], movies[1], movies[2], movies[4]],
  movies: movies.filter(movie => movie.category === 'Movie'),
  tvShows: movies.filter(movie => movie.category !== 'Movie'),
  originals: [movies[0], movies[1], movies[7], movies[9]]
};

export const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", 
  "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"
];

export const featuredContent = {
  id: movies[9].id,
  title: movies[9].title,
  description: movies[9].description,
  image: movies[9].image,
  logo: "https://images.unsplash.com/photo-1518343265568-51eec52d40da?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280",
  videoPreview: "bloom_preview.mp4",
  year: 2023,
  rating: "TV-MA",
  duration: "2h 23m",
  genres: ["Sci-Fi", "Horror", "Drama"],
  match: 97
};
 