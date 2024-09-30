'use client'
import { usePathname } from "next/navigation"
import styles from "./menuLink.module.css"
import Link from "next/link"

export default function MenuLink({item}) {
    const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active  }`}>
    {/* if the pathname equals the item path, then give it a classname "styles.active" which will later be styled in our css file */}
        {item.icon}
        {item.title}
    </Link>
    
  )
}
