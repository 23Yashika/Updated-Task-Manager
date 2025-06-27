import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, username }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

    
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    fullName,
    setFullName,
    username,
    setUsername,
    handleSubmit,
    error,
  };
};

export default useRegister;
