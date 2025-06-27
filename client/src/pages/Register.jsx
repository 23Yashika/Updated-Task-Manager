import React from 'react';
import useRegister from '../hooks/registerHook';
import { Link } from 'react-router-dom'; // Import Link for routing

const Register = () => {
  const {
    fullName,
    setFullName,
    username,
    setUsername,
    handleSubmit,
    error,
  } = useRegister();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 animate-pulse"></div>
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-400/20 animate-pulse"
              style={{
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-ping"></div>

      {/* Main Form Container */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-96 border-2 border-cyan-400/30 transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl"
        style={{
          boxShadow: '0 0 50px rgba(34, 211, 238, 0.3), inset 0 0 50px rgba(34, 211, 238, 0.1)'
        }}
      >
        {/* Glowing Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse mb-2">
            REGISTER
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/50 backdrop-blur-sm animate-pulse">
            <p className="text-red-300 text-center font-medium">{error}</p>
          </div>
        )}

        {/* Full Name Field */}
        <div className="mb-6 group">
          <label className="block mb-3 font-bold text-cyan-300 text-sm uppercase tracking-wider group-hover:text-cyan-200 transition-colors">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-cyan-400/30 rounded-xl focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/30 transition-all duration-300 text-white placeholder-gray-400 hover:border-cyan-400/50"
              placeholder="Enter your full name"
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>
          </div>
        </div>

        {/* Username Field */}
        <div className="mb-8 group">
          <label className="block mb-3 font-bold text-cyan-300 text-sm uppercase tracking-wider group-hover:text-cyan-200 transition-colors">
            Username
          </label>
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-cyan-400/30 rounded-xl focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/30 transition-all duration-300 text-white placeholder-gray-400 hover:border-cyan-400/50"
              placeholder="Choose a username"
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 active:scale-95 uppercase tracking-wider mb-8 z-10"
          style={{
            boxShadow: '0 10px 30px rgba(34, 211, 238, 0.3)'
          }}
        >
          <span className="relative z-20">Register</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity z-10"></div>
        </button>

        {/* Login prompt section */}
        <div className="text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-cyan-400/50 via-purple-400/50 to-cyan-400/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-r from-gray-900/80 to-black/80 text-cyan-300 font-medium tracking-wider">--------------OR--------------</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 font-medium">
            Already have an account?{' '}
            <Link
              to="/"
              className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors duration-300 hover:underline decoration-cyan-400 underline-offset-4"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
      </form>

      {/* Additional Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Register;