'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/login/login.module.css';
import { signup } from '@/app/lib/api';  // Import the signup function from api.js

export default function SignupPage() {
  const [message, setMessage] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  // Handle form submission for signup
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      // Call the signup function from the api.js file
      const data = await signup(firstname, lastname, email, password);

      // Handle the response, navigate to dashboard after successful signup
      setMessage('Signup successful!');
      router.push('/dashboard');
    } catch (error) {
      // Handle error from signup
      console.log('Error during signup:', error);
      setMessage(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignup}>
        <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>
        <h1>SIGN UP HERE</h1>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name..."
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name..."
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
