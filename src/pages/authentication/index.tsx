// Authentication.tsx
import React from 'react';
import { useAuthStore } from './stores/authStore';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const Authentication: React.FC = () => {
  const { isUser, setIsUserFalse, setIsUserTrue } = useAuthStore();

  return (
    <div>
      <button onClick={setIsUserFalse}>Sign Up</button>
      <button onClick={setIsUserTrue}>Login</button>
      {isUser ? <LoginForm /> : <SignUpForm />}
    </div>
  );
};

export default Authentication;
