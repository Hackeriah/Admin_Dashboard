'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/login/login.module.css';
import { login } from '@/app/lib/api'; // Import the login function from api.js

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState(''); // Use email instead of username
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Inactivity timer reference
  let inactivityTimeout;

  const logout = useCallback(() => {
    // Clear the authentication state
    localStorage.removeItem('authenticated');
    setAuthenticated(false);
    router.push('/login'); // Redirect to the login page
  }, [router]);

  const resetTimer = useCallback(() => {
    // Clear the existing timer
    if (inactivityTimeout) clearTimeout(inactivityTimeout);

    // Set a new timer for 10 minutes (600000 ms)
    inactivityTimeout = setTimeout(() => {
      logout(); // Logout after 10 minutes of inactivity
    }, 600000); // 10 minutes
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

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      window.removeEventListener('click', resetTimer);
      if (inactivityTimeout) clearTimeout(inactivityTimeout);
    };
  }, [resetTimer, router]);

  const authenticate = async (e) => {
    e.preventDefault();
    try {
      // Call the login API from api.js
      const response = await login(email, password);

      // If login is successful, set authenticated and store it in localStorage
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');  
      setMessage('Login successful! Redirecting...');
      router.push('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      setMessage(error.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={authenticate}>
        <p style={{ textAlign: "center", color: 'red' }}>{message}</p>
        <h1>LOGIN HERE</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update with email
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
