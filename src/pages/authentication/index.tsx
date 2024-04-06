// Authentication.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from './stores/authStore';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const Authentication: React.FC = () => {
  const { isUser, setIsUserFalse, setIsUserTrue } = useAuthStore();

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', padding: '25px' }}
      >
        <Button onClick={setIsUserFalse}>Sign Up</Button>
        <Button onClick={setIsUserTrue}>Login</Button>
      </div>
      <div>{isUser ? <LoginForm /> : <SignUpForm />}</div>
    </>
  );
};

export default Authentication;
