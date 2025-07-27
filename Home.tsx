import  { Link } from 'react-router-dom';
import { ChevronRight, X, Check, Plus, Globe } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at Netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero section */}
      <div className="hero-section min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">Unlimited movies, TV shows, and more</h1>
          <p className="text-xl md:text-2xl mb-5">Watch anywhere. Cancel anytime.</p>
          <p className="text-lg mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-3xl mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-4 py-4 bg-black bg-opacity-70 border border-gray-600 rounded text-white w-full text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link to="/browse" className="flex items-center justify-center bg-red-600 text-white font-bold py-4 px-8 rounded hover:bg-red-700 transition-colors whitespace-nowrap">
              Get Started <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="border-t-8 border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enjoy on your TV</h2>
            <p className="text-lg md:text-xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw5fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280" 
              alt="TV" 
              className="w-full max-w-md rounded mx-auto z-10 relative"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="border-t-8 border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Download your shows to watch offline</h2>
            <p className="text-lg md:text-xl">Save your favorites easily and always have something to watch.</p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1518343265568-51eec52d40da?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280" 
              alt="Mobile device" 
              className="w-full max-w-md rounded mx-auto relative z-10"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black p-3 rounded-lg border-2 border-gray-600 flex items-center w-[80%] max-w-xs">
              <img 
                src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280" 
                alt="Stranger Things" 
                className="h-16 w-10 object-cover mr-3"
              />
              <div className="flex-1">
                <div className="font-bold">Stranger Things</div>
                <div className="text-blue-400 text-sm">Downloading...</div>
              </div>
              <div className="h-10 w-10 flex-shrink-0">
                <svg className="animate-pulse" viewBox="0 0 24 24">
                  <path fill="#fff" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t-8 border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Watch everywhere</h2>
            <p className="text-lg md:text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280" 
              alt="Devices" 
              className="w-full max-w-md rounded mx-auto relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-black/40 to-transparent rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="border-t-8 border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Create profiles for kids</h2>
            <p className="text-lg md:text-xl">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxuZXRmbGl4JTIwbW92aWUlMjBwb3N0ZXJzJTIwY2luZW1hdGljJTIwZGFya3xlbnwwfHx8fDE3NDc3NDczNTB8MA&ixlib=rb-4.1.0&fit=fillmax&h=720&w=1280" 
              alt="Kids" 
              className="w-full max-w-md rounded mx-auto"
            />
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="border-t-8 border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 mb-2 transition-all">
                <button 
                  className="w-full p-5 text-left text-xl font-medium border-b border-black flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {expandedFaq === index ? <X size={24} /> : <Plus size={24} />}
                </button>
                {expandedFaq === index && (
                  <div className="p-5 bg-gray-800 text-lg">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-4 bg-black bg-opacity-70 border border-gray-600 rounded text-white w-full text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link to="/browse" className="flex items-center justify-center bg-red-600 text-white font-bold py-4 px-8 rounded hover:bg-red-700 transition-colors whitespace-nowrap">
                Get Started <ChevronRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t-8 border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-gray-500">
          <p className="mb-6">Questions? Call 1-844-505-2993</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Investor Relations</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Speed Test</li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Jobs</li>
              <li className="hover:underline cursor-pointer">Cookie Preferences</li>
              <li className="hover:underline cursor-pointer">Legal Notices</li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer">Account</li>
              <li className="hover:underline cursor-pointer">Ways to Watch</li>
              <li className="hover:underline cursor-pointer">Corporate Information</li>
              <li className="hover:underline cursor-pointer">Only on Netflix</li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer">Media Center</li>
              <li className="hover:underline cursor-pointer">Terms of Use</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>
          
          <div className="flex items-center mb-6">
            <Globe size={16} className="mr-2" />
            <select className="bg-transparent border border-gray-600 text-sm p-1 rounded">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          
          <p className="text-sm">Netflix</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
 