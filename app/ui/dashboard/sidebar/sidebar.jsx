'use client'
import { useEffect } from "react";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

export default function Sidebar() {

  const router = useRouter()

  useEffect(() => {
    const authStatus = localStorage.getItem('authenticated');
    if (authStatus !== 'true') {
      router.push('/login'); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    router.push('/login'); 
  };  

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transaction",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },

    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },

    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="" height="50" width="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>ISAIAH SAMUEL</span> 
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li  key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <div className={styles.logout}>
        <MdLogout/>
        <button onClick={handleLogout} >Log Out</button>
      </div>
    </div>
  );
}
