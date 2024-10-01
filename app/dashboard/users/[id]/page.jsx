import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
export default function SingleUser() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Isaiah Paulina
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Isaiah Paulina"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="sample@gmail.com"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Input your password"
            required
          />

          <label>Phone</label>
          <input type="phone" name="phone" placeholder="+234800000.." />

          <label>Address</label>
          <textarea
            type="address"
            name="address"
            placeholder="Enter your Address..... "
          />

          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>

          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
          <button >Update</button>
        </form>
      </div>
    </div>
  );
}
