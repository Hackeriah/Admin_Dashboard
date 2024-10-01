import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import styles from '@/app/ui/dashboard/products/products.module.css';
import Pagination from "@/app/ui/dashboard/pagination/pagination";

export default function ProductsPage() {
  const placeholder = 'Search a products...'
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={placeholder}/>
        <Link href="/dashboard/products/add"><button className={styles.addButton}>Add Product</button></Link>
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created at</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.product}><Image src="/noproduct.jpg" alt="" height={40} width={40} className={styles.productImage} /> IPhone</div></td>
            <td>skbsjdhvjsdhkgsavdhgkahdvkvshdkshdvkbshdfhb </td>
            <td>$123</td>
            <td>oct 1 2024</td>
            <td>34</td>
            <td className={styles.buttons}>
             <Link href='/dashboard/products/product'><button className={`${styles.button} ${styles.viewButton}`}>View</button></Link>
             <Link href={'/'}><button className={`${styles.button} ${styles.deleteButton}`}>Delete</button></Link>
            </td>

          </tr>



          <tr>
            <td><div className={styles.product}><Image src="/noproduct.jpg" alt="" height={40} width={40} className={styles.productImage} /> SamSung TV</div></td>
            <td>skbsjdhvjsdhkgsavdhgkahdvkvshdkshdvkbshdfhb </td>
            <td>$2500</td>
            <td>oct 1 2024</td>
            <td>28</td>
            <td className={styles.buttons}>
             <Link href='/dashboard/products/test'><button className={`${styles.button} ${styles.viewButton}`}>View</button></Link>
             <Link href={'/'}><button className={`${styles.button} ${styles.deleteButton}`}>Delete</button></Link>
            </td>

          </tr>

          <tr>
            <td><div className={styles.product}><Image src="/noproduct.jpg" alt="" height={40} width={40} className={styles.productImage} /> Lenovo Laptop</div></td>
            <td>skbsjdhvjsdhkgsavdhgkahdvkvshdkshdvkbshdfhb </td>
            <td>$1999</td>
            <td>oct 1 2024</td>
            <td>15</td>
            <td className={styles.buttons}>
             <Link href='/dashboard/products/test'><button className={`${styles.button} ${styles.viewButton}`}>View</button></Link>
             <Link href={'/'}><button className={`${styles.button} ${styles.deleteButton}`}>Delete</button></Link>
            </td>

          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>

  )
}
