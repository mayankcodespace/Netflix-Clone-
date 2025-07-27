import  { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, VolumeX, Volume2, ArrowLeft, Check, X, Share, Download } from 'lucide-react';
import { movies } from '../data/movies';
import { Movie } from '../types';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [inMyList, setInMyList] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState('episodes');
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const foundMovie = movies.find(m => m.id === id);
    if (foundMovie) {
      setMovie(foundMovie);
      
      // Simulate video loading after a delay
      const timer = setTimeout(() => {
        setShowVideo(true);
        setIsPlaying(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [id]);
  
  const toggleMyList = () => {
    setInMyList(!inMyList);
  };
  
  const toggleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };
  
  const toggleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };
  
  const toggleMute = () => {
    setMuted(!muted);
  };
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.error("Play error:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  
  const episodes = Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Episode ${i + 1}`,
    description: "As the residents prepare for the autumn festival, a wave of paranormal events stirs fear throughout the town, linking to the disappearance.",
    duration: "54m",
    thumbnail: movie.image
  }));

  return (
    <div className="pt-16 bg-black min-h-screen">
      {/* Hero Section with Video/Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
        <div className="absolute top-4 left-4 z-20">
          <Link to="/browse" className="flex items-center text-white hover:text-gray-300 bg-black/50 p-2 rounded-full">
            <ArrowLeft size={24} />
          </Link>
        </div>
        
        {showVideo ? (
          <>
            {/* Video would go here in a real Netflix */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${movie.image})`,
                filter: 'brightness(0.7)'
              }}
            ></div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            
            <div className="absolute bottom-6 right-6 flex space-x-3 z-20">
              <button 
                className="p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors"
                onClick={toggleMute}
              >
                {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              
              <button 
                className="p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <X size={24} /> : <Play size={24} />}
              </button>
            </div>
          </>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center animate-pulse"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${movie.image})` 
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        )}
        
        {/* Content Info */}
        <div className="absolute bottom-0 left-0 p-4 md:p-8 z-10 w-full">
          <div className="flex items-start">
            <div className="flex-1 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                <span className="text-green-500 font-bold">{movie.match}% Match</span>
                <span>{movie.year}</span>
                <span className="border px-1">{movie.rating}</span>
                <span>{movie.duration}</span>
                <span className="border px-1">HD</span>
                {movie.new && <span className="bg-red-600 text-white text-xs px-1 rounded">NEW</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Controls & Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 -mt-2 relative z-20">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Link to="#play" className="flex items-center bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition-colors">
            <Play size={20} className="mr-2" fill="black" />
            Play
          </Link>
          
          <button 
            className={`flex items-center ${inMyList ? 'bg-gray-700' : 'bg-gray-800'} border border-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition-colors`}
            onClick={toggleMyList}
          >
            {inMyList ? <Check size={20} className="mr-2" /> : <Plus size={20} className="mr-2" />}
            My List
          </button>
          
          <button 
            className={`flex items-center p-2 rounded-full ${liked ? 'bg-white text-black' : 'bg-gray-800 text-white'} hover:bg-gray-200 hover:text-black transition-colors`}
            onClick={toggleLike}
          >
            <ThumbsUp size={20} />
          </button>
          
          <button 
            className={`flex items-center p-2 rounded-full ${disliked ? 'bg-white text-black' : 'bg-gray-800 text-white'} hover:bg-gray-200 hover:text-black transition-colors rotate-180`}
            onClick={toggleDislike}
          >
            <ThumbsUp size={20} />
          </button>
          
          <div className="ml-auto flex space-x-2">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Share size={20} />
            </button>
            
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Download size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className={`text-gray-200 ${showMoreDescription ? '' : 'line-clamp-3'}`}>
                {movie.description}
                {showMoreDescription && " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
              </p>
              <button 
                className="text-gray-400 text-sm mt-1 hover:text-white"
                onClick={() => setShowMoreDescription(!showMoreDescription)}
              >
                {showMoreDescription ? 'Show less' : 'Show more'}
              </button>
            </div>
            
            {/* Tabs Navigation */}
            <div className="border-b border-gray-800 mb-4">
              <div className="flex space-x-6">
                <button 
                  className={`py-3 px-1 font-medium text-lg border-b-2 ${activeTab === 'episodes' ? 'border-red-600 text-white' : 'border-transparent text-gray-400'}`}
                  onClick={() => setActiveTab('episodes')}
                >
                  Episodes
                </button>
                <button 
                  className={`py-3 px-1 font-medium text-lg border-b-2 ${activeTab === 'trailers' ? 'border-red-600 text-white' : 'border-transparent text-gray-400'}`}
                  onClick={() => setActiveTab('trailers')}
                >
                  Trailers & More
                </button>
                <button 
                  className={`py-3 px-1 font-medium text-lg border-b-2 ${activeTab === 'similar' ? 'border-red-600 text-white' : 'border-transparent text-gray-400'}`}
                  onClick={() => setActiveTab('similar')}
                >
                  More Like This
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'episodes' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Season 1</h3>
                  <select className="bg-black text-white border border-gray-700 rounded px-4 py-1">
                    <option>Season 1</option>
                    <option>Season 2</option>
                    <option>Season 3</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  {episodes.map(episode => (
                    <div key={episode.id} className="flex flex-col md:flex-row rounded-md bg-gray-900 hover:bg-gray-800 transition-colors">
                      <div className="md:w-40 md:h-24 flex-shrink-0">
                        <img 
                          src={episode.thumbnail} 
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold">{episode.title}</h4>
                          <span className="text-gray-400 text-sm">{episode.duration}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{episode.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'trailers' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded overflow-hidden group relative">
                  <img 
                    src={movie.image} 
                    alt="Trailer 1" 
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={40} className="text-white" />
                  </div>
                  <div className="p-2">
                    <h4 className="font-medium">Official Trailer</h4>
                    <p className="text-sm text-gray-400">2:14</p>
                  </div>
                </div>
                
                <div className="rounded overflow-hidden group relative">
                  <img 
                    src={movie.image} 
                    alt="Trailer 2" 
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={40} className="text-white" />
                  </div>
                  <div className="p-2">
                    <h4 className="font-medium">Teaser</h4>
                    <p className="text-sm text-gray-400">1:22</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'similar' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                {movies
                  .filter(m => m.id !== movie.id)
                  .slice(0, 6)
                  .map(similarMovie => (
                    <Link key={similarMovie.id} to={`/movie/${similarMovie.id}`} className="transition-transform hover:scale-105">
                      <img 
                        src={similarMovie.image} 
                        alt={similarMovie.title} 
                        className="w-full h-40 object-cover rounded"
                      />
                      <h3 className="mt-2 font-medium">{similarMovie.title}</h3>
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="text-green-500 font-bold mr-2">{similarMovie.match}% Match</span>
                        <span>{similarMovie.duration}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
          
          <div>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400">Cast:</span>
                <p>Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo</p>
              </div>
              
              <div>
                <span className="text-gray-400">Genres:</span>
                <p>{movie.genres?.join(', ')}</p>
              </div>
              
              <div>
                <span className="text-gray-400">This show is:</span>
                <p>Suspenseful, Sci-Fi, Teen</p>
              </div>
              
              <div>
                <span className="text-gray-400">Maturity rating:</span>
                <p>{movie.rating} <span className="border px-1 text-sm ml-2">Recommended for ages 14 and up</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* More Like This Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-800 mt-8">
        <h2 className="text-2xl font-bold mb-6">More Like This</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies
            .filter(m => m.id !== movie.id)
            .slice(0, 10)
            .map(similarMovie => (
              <Link key={similarMovie.id} to={`/movie/${similarMovie.id}`} className="transition-transform hover:scale-105">
                <img 
                  src={similarMovie.image} 
                  alt={similarMovie.title} 
                  className="w-full h-48 object-cover rounded"
                />
                <div className="mt-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium line-clamp-1">{similarMovie.title}</h3>
                    <span className="text-green-500 text-sm font-bold">{similarMovie.match}%</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>{similarMovie.year}</span>
                    <span>{similarMovie.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
 