'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/login/login.module.css';

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Inactivity timer reference
  let inactivityTimeout;

  const logout = useCallback(() => {
    // Clear the authentication state
    localStorage.removeItem('authenticated');
    setAuthenticated(false);
    router.push('/login');  // Redirect to the login page
  }, [router]);

  const resetTimer = useCallback(() => {
    // Clear the existing timer
    if (inactivityTimeout) clearTimeout(inactivityTimeout);

    // Set a new timer for 10 minutes (600000 ms)
    inactivityTimeout = setTimeout(() => {
      logout();  // Logout after 10 minutes of inactivity
    }, 600000); // 300000 ms = 5 minutes
  }, [logout]);

  useEffect(() => {
    // Check authentication status on initial load
    const authStatus = localStorage.getItem('authenticated');
    if (authStatus === 'true') {
      setAuthenticated(true);
      router.push('/dashboard');
    }

    // Set up activity listeners
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);
    window.addEventListener('click', resetTimer);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      window.removeEventListener('click', resetTimer);
      if (inactivityTimeout) clearTimeout(inactivityTimeout);
    };
  }, [resetTimer, router]);

  const authenticate = (e) => {
    e.preventDefault();

    // Check for valid credentials
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');  // Store authentication status
      router.push('/dashboard');  // Redirect to the dashboard
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={authenticate}>
        <p style={{ textAlign: "center", color: 'red' }}>{message}</p>
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
