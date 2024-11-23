// 'use client'; 

// import styles from "@/app/ui/dashboard/users/users.module.css";
// import Search from "@/app/ui/dashboard/search/search";
// import Link from "next/link";
// import Image from "next/image";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";
// import { FetchUsers } from "@/app/lib/data";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 
//   const router = useRouter(); 

//   useEffect(() => {
//     const fetchUsersData = async () => {
//       try {
//         const fetchedUsers = await FetchUsers();
//         setUsers(fetchedUsers);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError("Failed to fetch users.");
//         setLoading(false);
//         router.push('/dashboard');
//       }
//     };

//     fetchUsersData();
//   }, [router]);


//   if (loading) {
//     return <div>Loading...</div>;
//   }


//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const placeholder = "Search for a user...";

//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         <Search placeholder={placeholder} />
//         <Link href="/dashboard/users/add">
//           <button className={styles.addButton}>Add User</button>
//         </Link>
//       </div>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Created at</th>
//             <th>Role</th>
//             <th>Action</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>
//                 <div className={styles.user}>
//                   <Image
//                     src={user.img || "/default-user.png"}
//                     alt={user.name}
//                     height={40}
//                     width={40}
//                     className={styles.userImage}
//                   />{" "}
//                   {user.name}
//                 </div>
//               </td>
//               <td>{user.email}</td>
//               <td>{user.createdAt?.toString().slice(0, 16)}</td>
//               <td>{user.isAdmin ? "Admin" : "Client"}</td>
//               <td>{user.isActive ? "Active" : "Passive"}</td>
//               <td className={styles.buttons}>
//                 <Link href={`/dashboard/users/${user._id}`}>
//                   <button className={`${styles.button} ${styles.viewButton}`}>
//                     View
//                   </button>
//                 </Link>
//                 <button
//                   className={`${styles.button} ${styles.deleteButton}`}
//                   onClick={() => handleDeleteUser(user._id)} 
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination />
//     </div>
//   );
// };

// export default UsersPage;



export default function Page() {
  return (
    <div>USERS PAGE </div>
  )
}
