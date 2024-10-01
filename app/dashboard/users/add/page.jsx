import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
       
        <input type="text" placeholder="Username" name="Username" required />
        <input type="number" placeholder="Email" name="Email" required/>
        <input type="number" placeholder="Password" name="Password" required />
       <input type="text" placeholder="Phone" name="Phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin? </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true}>Is Active? </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
       
        <textarea name="address" id="address" rows='10' placeholder="Address"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
