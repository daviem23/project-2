import React from 'react';
import { 
  Clock, 
  Heart, 
  Home, 
  Trophy, 
  Users,
  ChevronRight,
  CheckCircle,
  PlayCircle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">EazzyFitness</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Programs</a>
              <a href="#" className="text-gray-700 hover:text-red-600">About</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Contact</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Fitness That Fits Your Life
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Transform your health without sacrificing your schedule. Expert-designed workouts and wellness solutions for busy professionals.
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors flex items-center">
                  Start Your Journey <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors flex items-center">
                  Watch Demo <PlayCircle className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Woman working out at home"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Time-Efficient</h3>
              <p className="text-gray-600">Effective workouts designed to fit your busy schedule, delivering results in 30 minutes or less.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Home className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Home-Based</h3>
              <p className="text-gray-600">No gym required. Get fit with minimal equipment in the comfort of your own space.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Trophy className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">Science-backed programs designed to deliver sustainable, long-term results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600">Join thousands of busy professionals achieving their fitness goals</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10k+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Workout Videos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">4.9</div>
              <div className="text-gray-600">App Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join EazzyFitness today and discover how simple it can be to prioritize your health without compromising your lifestyle.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
                <span className="ml-2 text-lg font-bold">EazzyFitness</span>
              </div>
              <p className="text-gray-400">Making fitness accessible for busy professionals.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Home Workouts</li>
                <li>Nutrition Plans</li>
                <li>Personal Training</li>
                <li>Corporate Wellness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EazzyFitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;