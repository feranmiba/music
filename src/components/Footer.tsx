import { FaTiktok, FaInstagram, FaTwitch, FaSnapchatGhost } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 mt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Main content */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-headline">
              Connect With Me
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto">
              Follow my musical journey and stay updated with my latest releases
            </p>
          </div>
          
          {/* Social media links */}
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://www.tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-slate-950 hover:to-black transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25"
            >
              <FaTiktok className="text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-red-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <FaInstagram className="text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://www.twitch.tv/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              className="group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <FaTwitch className="text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://www.snapchat.com/add/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
              className="group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              <FaSnapchatGhost className="text-2xl md:text-3xl transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          
          {/* Built by credit */}
          <div className="text-center">
            <a
              href="https://portfolioamiola.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                Designed and Developed by
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                AmiolaDev
              </span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:animate-pulse"></div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
    </footer>
  );
}