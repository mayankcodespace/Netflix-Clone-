import  { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({ email: '', password: '' });
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Please enter a valid email address or phone number.';
      valid = false;
    }
    
    if (!password) {
      newErrors.password = 'Your password must contain between 4 and 60 characters.';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Login with:', { email, password, rememberMe });
    }
  };

  return (
    <div className="hero-section min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="p-16 bg-black bg-opacity-80 rounded w-full max-w-md relative z-10">
        <h1 className="text-3xl font-bold mb-8">Sign In</h1>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className={`relative border-b-2 ${errors.email ? 'border-orange-500' : 'border-gray-600'}`}>
              <input 
                type="text" 
                id="email"
                className={`w-full p-4 bg-gray-700 rounded text-white focus:outline-none ${email ? 'pt-6 pb-2' : 'py-4'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label 
                htmlFor="email" 
                className={`absolute transition-all duration-200 ${email ? 'text-xs top-1.5' : 'top-4'} left-4 text-gray-400`}
              >
                Email or phone number
              </label>
            </div>
            {errors.email && <p className="text-orange-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <div className={`relative border-b-2 ${errors.password ? 'border-orange-500' : 'border-gray-600'}`}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password"
                className={`w-full p-4 bg-gray-700 rounded text-white focus:outline-none pr-12 ${password ? 'pt-6 pb-2' : 'py-4'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label 
                htmlFor="password" 
                className={`absolute transition-all duration-200 ${password ? 'text-xs top-1.5' : 'top-4'} left-4 text-gray-400`}
              >
                Password
              </label>
              <button 
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-orange-500 text-sm mt-1">{errors.password}</p>}
          </div>
          
          <Link 
            to="/browse" 
            className="w-full block text-center bg-red-600 text-white font-semibold py-3 px-6 rounded hover:bg-red-700 transition-colors"
          >
            Sign In
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 bg-gray-700 border-none"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember" className="text-gray-400 text-sm ml-2">Remember me</label>
            </div>
            <a href="#" className="text-gray-400 text-sm hover:underline">Need help?</a>
          </div>
        </form>
        
        <div className="mt-16">
          <p className="text-gray-500">
            New to Netflix? <Link to="/" className="text-white hover:underline">Sign up now</Link>.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <button className="text-blue-600 hover:underline ml-1">Learn more.</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
 