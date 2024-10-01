import styles from './pagination.module.css'

export default function Pagination() {
  return (
    <div className={styles.buttons}>
        <button disabled className={`${styles.button} ${styles.previous}`}>Previous</button>
        <button className={`${styles.button} ${styles.next}`}>Next</button>
      </div>
  )
}
