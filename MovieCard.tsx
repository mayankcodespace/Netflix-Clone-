import  { Play, Plus, ThumbsUp, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  inMyList?: boolean;
}

const MovieCard = ({ movie, inMyList = false }: MovieCardProps) => {
  const [showControls, setShowControls] = useState(false);
  const [added, setAdded] = useState(inMyList);
  const [liked, setLiked] = useState(false);
  
  const toggleMyList = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(!added);
  };
  
  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleMoreInfo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Logic for more info modal would go here
  };

  return (
    <div 
      className="relative group card-hover"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-[10rem] object-cover rounded-md"
        />
        
        {movie.match && (
          <div className="absolute top-0 right-0 bg-black/70 text-green-500 text-xs font-bold p-1 m-1 rounded">
            {movie.match}% Match
          </div>
        )}
        
        {movie.new && (
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold py-1 px-2 m-1 rounded">
            NEW
          </div>
        )}
        
        <div className={`absolute inset-0 bg-black rounded-md transition-all duration-200 ${showControls ? 'bg-opacity-70' : 'bg-opacity-0'} flex items-end`}>
          <div className={`p-3 w-full transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-white font-medium text-sm line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center space-x-1 mt-1 text-xs">
              {movie.rating && <span className="border px-1">{movie.rating}</span>}
              <span>{movie.duration}</span>
            </div>
            
            <div className="flex items-center space-x-1 mt-1 text-xs">
              {movie.genres?.slice(0, 3).map((genre, idx) => (
                <span key={idx} className="text-gray-300">
                  {genre}{idx < Math.min(2, (movie.genres?.length || 0) - 1) && ", "}
                </span>
              ))}
            </div>
            
            <div className="flex items-center space-x-2 mt-3">
              <button className="p-1.5 bg-white rounded-full hover:bg-gray-200 transition-colors">
                <Play size={16} className="text-black" fill="black" />
              </button>
              
              <button 
                className="p-1.5 border border-gray-400 rounded-full hover:border-white transition-colors"
                onClick={toggleMyList}
              >
                {added ? <Check size={16} className="text-white" /> : <Plus size={16} className="text-white" />}
              </button>
              
              <button 
                className={`p-1.5 border border-gray-400 rounded-full hover:border-white transition-colors ${liked ? 'bg-red-600 border-red-600' : ''}`}
                onClick={toggleLike}
              >
                <ThumbsUp size={16} className="text-white" />
              </button>
              
              <button 
                className="p-1.5 border border-gray-400 rounded-full hover:border-white transition-colors ml-auto"
                onClick={handleMoreInfo}
              >
                <ChevronDown size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
 