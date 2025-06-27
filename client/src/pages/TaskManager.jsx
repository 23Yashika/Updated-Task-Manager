import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTasks from '../hooks/taskHook';
import Card from '../components/Card';

const TaskManager = () => {
  const { userId } = useParams(); // MongoDB _id
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const {
    title,
    description,
    setTitle,
    setDescription,
    tasks,
    completedTasks,
    addOrUpdateTask,
    deleteTask,
    markComplete,
    editTask,
    editTaskId, // <-- check if we are editing
  } = useTasks(userId);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch user');
        setName(data.fullName);
        setUsername(data.username);
      } catch (err) {
        console.error('Error fetching user:', err.message);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 animate-pulse"></div>
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-400/20 animate-pulse"
              style={{
                animationDelay: `${(i * 0.05) % 4}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Ambient Effects */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-ping"></div>
      <div className="absolute bottom-1/3 left-20 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse mb-4">
            TASK MANAGER
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse mb-6"></div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-400/30 inline-block">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2">Hello, {name}</h2>
            <p className="text-gray-400 text-lg">Username: <span className="text-purple-300 font-medium">{username}</span></p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-2 border-cyan-400/30 mb-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-cyan-400/50 hover:shadow-2xl"
             style={{
               boxShadow: '0 0 50px rgba(34, 211, 238, 0.2), inset 0 0 50px rgba(34, 211, 238, 0.1)'
             }}>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {editTaskId ? 'UPDATE TASK' : 'CREATE NEW TASK'}
            </h3>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2"></div>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label className="block mb-2 font-bold text-cyan-300 text-sm uppercase tracking-wider">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-cyan-400/30 rounded-xl focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/30 transition-all duration-300 text-white placeholder-gray-400 hover:border-cyan-400/50"
              />
            </div>

            <div className="group">
              <label className="block mb-2 font-bold text-cyan-300 text-sm uppercase tracking-wider">Task Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
                rows="4"
                className="w-full px-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-cyan-400/30 rounded-xl focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/30 transition-all duration-300 text-white placeholder-gray-400 hover:border-cyan-400/50 resize-none"
              ></textarea>
            </div>

            <button
              onClick={addOrUpdateTask}
              className={`w-full py-4 px-6 ${
                editTaskId 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500'
              } text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 uppercase tracking-wider`}
              style={{
                boxShadow: editTaskId 
                  ? '0 10px 30px rgba(245, 158, 11, 0.3)' 
                  : '0 10px 30px rgba(34, 211, 238, 0.3)'
              }}
            >
              <span className="relative z-10">
                {editTaskId ? 'Update Task' : 'Add Task'}
              </span>
            </button>
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
        </div>

        {/* Recent Tasks Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              RECENT TASKS
            </h3>
            <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2"></div>
          </div>

          {tasks.length === 0 ? (
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/30 text-center">
              <p className="text-gray-400 text-lg">No tasks available.</p>
              <div className="mt-4">
                <div className="inline-block w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <div key={task._id} className="transform transition-all duration-300 hover:scale-105">
                  <Card
                    task={task}
                    type="recent"
                    onComplete={markComplete}
                    onEdit={editTask}
                    onDelete={deleteTask}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Completed Tasks Section */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              COMPLETED TASKS
            </h3>
            <div className="h-0.5 w-28 mx-auto bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2"></div>
          </div>

          {completedTasks.length === 0 ? (
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-600/30 text-center">
              <p className="text-gray-400 text-lg">No completed tasks yet.</p>
              <div className="mt-4">
                <div className="inline-block w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 animate-pulse"></div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedTasks.map((task) => (
                <div key={task._id} className="transform transition-all duration-300 hover:scale-105">
                  <Card
                    task={task}
                    type="completed"
                    onDelete={deleteTask}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Additional Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};

export default TaskManager;