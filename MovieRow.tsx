import  { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  isOriginals?: boolean;
}

const MovieRow = ({ title, movies, isOriginals = false }: MovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const [showControls, setShowControls] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMoved(false);
      if (rowRef.current) {
        rowRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 pl-4 md:pl-12" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      
      <div className="group relative">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-black/70 hover:bg-black/80 rounded-full p-2 ${(!isMoved || !showControls) && 'hidden'}`}
          onClick={() => handleClick('left')} 
        />
        
        <div 
          ref={rowRef}
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className={isOriginals ? "min-w-[200px] h-[300px]" : "min-w-[180px] h-[240px]"}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        
        <ChevronRight 
          className={`absolute top-0 bottom-0 right-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 bg-black/70 hover:bg-black/80 rounded-full p-2 ${!showControls && 'hidden'}`}
          onClick={() => handleClick('right')} 
        />
      </div>
    </div>
  );
};

export default MovieRow;
 