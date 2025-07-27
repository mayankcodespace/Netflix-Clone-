import  { Facebook, Instagram, Twitter, Youtube, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-6 mb-6">
          <Link to="#" className="hover:text-white">
            <Facebook size={24} />
          </Link>
          <Link to="#" className="hover:text-white">
            <Instagram size={24} />
          </Link>
          <Link to="#" className="hover:text-white">
            <Twitter size={24} />
          </Link>
          <Link to="#" className="hover:text-white">
            <Youtube size={24} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Audio Description</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
            <li className="hover:underline cursor-pointer">Account</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Gift Cards</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
            <li className="hover:underline cursor-pointer">Media Center</li>
          </ul>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Speed Test</li>
            <li className="hover:underline cursor-pointer">Only on Netflix</li>
            <li className="hover:underline cursor-pointer">Ways to Watch</li>
          </ul>
        </div>
        
        <div className="flex items-center mb-4">
          <Globe size={16} className="mr-2" />
          <select className="bg-transparent border border-gray-600 text-sm p-1 rounded">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        
        <div className="border border-gray-800 text-xs py-2 px-4 inline-block mb-4 hover:text-white cursor-pointer">
          Service Code
        </div>
        
        <p className="text-xs">© 1997-2023 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
 