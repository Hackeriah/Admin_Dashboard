'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/login/login.module.css';

export default function LoginPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  
  useEffect(() => {
    const authStatus = localStorage.getItem('authenticated');
    if (authStatus === 'true') {
      setAuthenticated(true);
      router.push('/dashboard');
    }
  }, []);

  const authenticate = (e) => {
    e.preventDefault(); 

    
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true'); 
      router.push('/dashboard'); 
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={authenticate}>
        <h1>LOGIN HERE</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter Username.."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
