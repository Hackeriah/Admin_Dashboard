import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { User } from "@/app/lib/models";
import { FetchUsers } from "@/app/lib/data";
const UsersPage = async () => {
  const users = await FetchUsers();
  console.log(users);
  const placeholder = "Search for a user...";
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={placeholder} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add User</button>
        </Link>
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
          {users.map((user) => (
            
          <tr key={user.img}>
            <td>
              <div className={styles.user}>
                <Image
                  src={user.img}
                  alt=""
                  height={40}
                  width={40}
                  className={styles.userImage}
                />{" "}
                {user.name}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(0,16)}</td>
            <td>{user.isAdmin ? "Admin": "Client"}</td>
            <td>{user.isActive ? "Active": "Passive"}</td>
            <td className={styles.buttons}>
              <Link href={`/dashboard/users/${user.id}`}>
                <button className={`${styles.button} ${styles.viewButton}`}>
                  View
                </button>
              </Link>
              <Link href={"/"}>
                <button className={`${styles.button} ${styles.deleteButton}`}>
                  Delete
                </button>
              </Link>
            </td>
          </tr>
          
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default UsersPage;


