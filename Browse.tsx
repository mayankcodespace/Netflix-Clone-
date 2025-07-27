import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieRow from '../components/MovieRow';
import { groupedMovies, featuredContent, genres } from '../data/movies';

const Browse = () => {
  const location = useLocation();
  const [category, setCategory] = useState<string | null>(null);
  const [genreFilter, setGenreFilter] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory(null);
    }
  }, [location]);

  const filterByGenre = (movies: any[]) => {
    if (!genreFilter) return movies;
    return movies.filter(movie => movie.genres?.includes(genreFilter));
  };

  return (
    <div className="bg-black pb-20">
      <FeaturedMovie content={featuredContent} />
      
      <div className="mt-[-100px] relative z-10 px-4 md:px-0">
        {category === 'tv' ? (
          <>
            <div className="flex items-center justify-between mb-4 md:ml-12">
              <h2 className="text-2xl font-bold">TV Shows</h2>
              <div className="relative">
                <select 
                  className="bg-black text-white border border-white py-1 px-4 rounded appearance-none cursor-pointer"
                  value={genreFilter || ''}
                  onChange={(e) => setGenreFilter(e.target.value || null)}
                >
                  <option value="">Genres</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
            </div>
            <MovieRow title="Popular TV Shows" movies={filterByGenre(groupedMovies.tvShows)} />
          </>
        ) : category === 'movies' ? (
          <>
            <div className="flex items-center justify-between mb-4 md:ml-12">
              <h2 className="text-2xl font-bold">Movies</h2>
              <div className="relative">
                <select 
                  className="bg-black text-white border border-white py-1 px-4 rounded appearance-none cursor-pointer"
                  value={genreFilter || ''}
                  onChange={(e) => setGenreFilter(e.target.value || null)}
                >
                  <option value="">Genres</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
            </div>
            <MovieRow title="Popular Movies" movies={filterByGenre(groupedMovies.movies)} />
          </>
        ) : category === 'new' ? (
          <>
            <h2 className="text-2xl font-bold mb-4 md:ml-12">New & Popular</h2>
            <MovieRow title="New Releases" movies={groupedMovies.newReleases} />
            <MovieRow title="Trending Now" movies={groupedMovies.trending} />
          </>
        ) : category === 'mylist' ? (
          <div className="pt-20 md:ml-12">
            <h2 className="text-3xl font-bold mb-6">My List</h2>
            {groupedMovies.popular.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {groupedMovies.popular.slice(0, 3).map(movie => (
                  <div key={movie.id} className="h-[240px]">
                    <MovieCard movie={movie} inMyList={true} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-xl">Your list is empty. Add titles to your list to watch them later.</p>
            )}
          </div>
        ) : (
          <>
            <MovieRow title="Netflix Originals" movies={groupedMovies.originals} isOriginals />
            <MovieRow title="Trending Now" movies={groupedMovies.trending} />
            <MovieRow title="New Releases" movies={groupedMovies.newReleases} />
            <MovieRow title="Popular on Netflix" movies={groupedMovies.popular} />
            <MovieRow title="Watch Again" movies={groupedMovies.watchAgain} />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
 