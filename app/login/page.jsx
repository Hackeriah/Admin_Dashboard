import styles from '@/app/ui/login/login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>
    <form action="" className={styles.form}>
      <h1>LOGIN HERE</h1>
      <input type="text" name='username' placeholder='Enter Username..'/>
      <input type="password" name="password" id="password" placeholder='Enter Password...' />
      <button type='submit'>Login</button>
    </form>
    </div>
  )
}
