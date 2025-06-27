import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import TaskManager from '../pages/TaskManager';

const AppRouter = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/register" element={<Register onRegister={setUser} />} />
      <Route path="/" element={<Login onLogin={setUser} />} />
      <Route path="/task/:userId" element={<TaskManager />} />
    </Routes>
  );
};

export default AppRouter;
