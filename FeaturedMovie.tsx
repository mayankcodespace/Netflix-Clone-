import  { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FeaturedContent } from '../types';

interface FeaturedMovieProps {
  content: FeaturedContent;
}

const FeaturedMovie = ({ content }: FeaturedMovieProps) => {
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Simulate video loading after a delay
    const timer = setTimeout(() => {
      setShowVideo(true);
      setIsPlaying(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative h-[80vh] sm:h-screen w-full bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${content.image})` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      {showVideo && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 z-10">
            <button 
              className="bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors"
              onClick={() => setMuted(!muted)}
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
          {/* Video simulation with a gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/90 z-0"></div>
        </div>
      )}
      
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-4 sm:px-12 lg:px-24 max-w-5xl">
        <div className="mb-6">
          {content.match && (
            <div className="mb-4 flex items-center">
              <span className="text-green-500 font-bold text-lg">{content.match}% Match</span>
              {content.new && (
                <span className="ml-2 text-xs uppercase font-bold border px-2 py-1 text-white">New</span>
              )}
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">{content.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm mb-6">
            <span>{content.year}</span>
            <span className="border px-1">{content.rating}</span>
            <span>{content.duration}</span>
            <span className="border px-1">HD</span>
          </div>
          
          <p className="text-lg text-gray-200 mb-6 line-clamp-3 md:line-clamp-none max-w-3xl">{content.description}</p>
          
          <div className="flex flex-wrap items-center gap-3">
            <Link to={`/movie/${content.id}`} className="flex items-center bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition-colors">
              <Play size={24} className="mr-2" fill="black" />
              Play
            </Link>
            <Link to={`/movie/${content.id}`} className="flex items-center bg-gray-600/70 text-white font-bold py-3 px-8 rounded hover:bg-gray-700/70 transition-colors">
              <Info size={24} className="mr-2" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
 