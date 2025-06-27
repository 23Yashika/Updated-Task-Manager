import { useEffect, useState } from 'react';

const useTasks = (userId) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null); // <-- to track if editing

  const API_BASE = 'https://updated-task-manager.onrender.com/api/tasks';

  useEffect(() => {
    const fetchUserAndTasks = async () => {
      try {
        const userRes = await fetch(`https://updated-task-manager.onrender.com/api/users/${userId}`);
        const userData = await userRes.json();
        setName(userData.fullName);
        setUsername(userData.username);

        const taskRes = await fetch(`${API_BASE}/${userId}`);
        const taskData = await taskRes.json();

        setTasks(taskData.filter((task) => !task.completed));
        setCompletedTasks(taskData.filter((task) => task.completed));
      } catch (error) {
        console.error('Failed to fetch user or tasks:', error);
      }
    };

    fetchUserAndTasks();
  }, [userId]);

  const addOrUpdateTask = async () => {
    if (!title || !description) return;

    if (editTaskId) {
      // 🔄 Update existing task
      const res = await fetch(`${API_BASE}/${editTaskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        setTasks((prev) =>
          prev.map((task) =>
            task._id === editTaskId ? { ...task, title, description } : task
          )
        );
      }

      setEditTaskId(null); // reset editing mode
    } else {
      // ➕ Add new task
      const res = await fetch(`${API_BASE}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, title, description }),
      });

      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask]);
    }

    // Reset form
    setTitle('');
    setDescription('');
  };

  const deleteTask = async (taskId) => {
    await fetch(`${API_BASE}/${taskId}`, { method: 'DELETE' });
    setTasks((prev) => prev.filter((task) => task._id !== taskId));
    setCompletedTasks((prev) => prev.filter((task) => task._id !== taskId));
  };

  const markComplete = async (taskId) => {
    await fetch(`${API_BASE}/${taskId}`, { method: 'PUT' });

    const taskToMove = tasks.find((task) => task._id === taskId);
    if (taskToMove) {
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
      setCompletedTasks((prev) => [...prev, { ...taskToMove, completed: true }]);
    }
  };

  const editTask = (taskId) => {
    const task = tasks.find((t) => t._id === taskId);
    if (task) {
      setEditTaskId(task._id);
      setTitle(task.title);
      setDescription(task.description);
    }
  };

  return {
    name,
    username,
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
    editTaskId, // optional: for showing "Edit Mode" label
  };
};

export default useTasks;
