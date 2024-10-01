import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
export default function UsersPage() {
  const placeholder = 'Search for a user...'
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={placeholder}/>
        <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add User</button></Link>
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created at</th>
            <th>Role</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}><Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} /> Isaiah</div></td>
            <td>Isaiah@gmail.com</td>
            <td>Oct 1 2024</td>
            <td>Client</td>
            <td>Passive</td>
            <td className={styles.buttons}>
             <Link href='/dashboard/users/test'><button className={`${styles.button} ${styles.viewButton}`}>View</button></Link>
             <Link href={'/'}><button className={`${styles.button} ${styles.deleteButton}`}>Delete</button></Link>
            </td>

          </tr>



          <tr>
            <td><div className={styles.user}><Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} />Jane</div></td>
            <td>jane@gmail.com</td>
            <td>Oct 1 2024</td>
            <td>Client</td>
            <td>Passive</td>
            <td className={styles.buttons}>
             <Link href='/dashboard/users/test'><button className={`${styles.button} ${styles.viewButton}`}>View</button></Link>
             <Link href={'/'}><button className={`${styles.button} ${styles.deleteButton}`}>Delete</button></Link>
            </td>

          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
}
