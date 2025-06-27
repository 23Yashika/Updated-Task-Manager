import React from 'react';

const Card = ({ task, type, onComplete, onEdit, onDelete }) => {
  return (
    <div className={`relative p-6 rounded-2xl shadow-2xl flex justify-between items-start transition-all duration-500 hover:scale-105 border-2 group ${
      type === 'completed' 
        ? 'bg-gradient-to-br from-emerald-900/80 to-green-900/80 backdrop-blur-xl border-emerald-400/30 hover:shadow-emerald-400/50 hover:shadow-2xl' 
        : 'bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-cyan-400/30 hover:shadow-cyan-400/50 hover:shadow-2xl'
    }`}
    style={{
      boxShadow: type === 'completed' 
        ? '0 0 30px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.1)'
        : '0 0 30px rgba(34, 211, 238, 0.2), inset 0 0 30px rgba(34, 211, 238, 0.1)'
    }}>
      
      {/* Status Indicator */}
      <div className={`absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 ${
        type === 'completed' 
          ? 'bg-gradient-to-r from-emerald-400 to-green-500 border-emerald-300 animate-pulse' 
          : 'bg-gradient-to-r from-cyan-400 to-blue-500 border-cyan-300 animate-pulse'
      }`}></div>

      {/* Main Content */}
      <div className="flex-1 mr-4">
        <h4 className={`text-xl font-bold mb-3 ${
          type === 'completed' 
            ? 'text-emerald-300 line-through' 
            : 'bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent'
        }`}>
          {task.title}
        </h4>
        <p className={`text-base leading-relaxed ${
          type === 'completed' 
            ? 'text-emerald-200/80 line-through' 
            : 'text-gray-300'
        }`}>
          {task.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-3">
        {type === 'recent' && (
          <>
            <button
              onClick={() => onComplete(task._id)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50 active:scale-95 uppercase tracking-wider"
              style={{
                boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)'
              }}
            >
              ✓ Complete
            </button>
            <button
              onClick={() => onEdit(task._id)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 active:scale-95 uppercase tracking-wider"
              style={{
                boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)'
              }}
            >
              ✎ Edit
            </button>
          </>
        )}
        <button
          onClick={() => onDelete(task._id)}
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 active:scale-95 uppercase tracking-wider"
          style={{
            boxShadow: '0 5px 15px rgba(239, 68, 68, 0.3)'
          }}
        >
          🗑 Delete
        </button>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 rounded-tr-lg ${
        type === 'completed' ? 'border-emerald-400' : 'border-cyan-400'
      }`}></div>
      <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 rounded-bl-lg ${
        type === 'completed' ? 'border-emerald-400' : 'border-cyan-400'
      }`}></div>
      <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 rounded-br-lg ${
        type === 'completed' ? 'border-emerald-400' : 'border-cyan-400'
      }`}></div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        type === 'completed' 
          ? 'bg-gradient-to-r from-emerald-400/10 to-green-400/10' 
          : 'bg-gradient-to-r from-cyan-400/10 to-blue-400/10'
      }`}></div>

      {/* Completion Badge */}
      {type === 'completed' && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-green-500 text-black font-bold text-xs px-3 py-1 rounded-full border-2 border-emerald-300 animate-pulse">
          COMPLETED
        </div>
      )}

      {/* Task Priority Indicator */}
      {type === 'recent' && (
        <div className="absolute top-2 left-2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
      )}
    </div>
  );
};

export default Card;