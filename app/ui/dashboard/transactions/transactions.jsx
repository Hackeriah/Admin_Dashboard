import styles from "./transactions.module.css";
import Image from "next/image";

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Isaiah Samuel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>29.09.2024</td>
            <td>$32,000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Isaiah Samuel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>29.09.2024</td>
            <td>$32,000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Isaiah Samuel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.canceled}`}>
                Canceled
              </span>
            </td>
            <td>29.09.2024</td>
            <td>$32,000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Isaiah Samuel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>29.09.2024</td>
            <td>$32,000</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Isaiah Samuel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>29.09.2024</td>
            <td>$32,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
