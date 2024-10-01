import styles from "@/app/ui/dashboard/products/addProduct/addproduct.module.css";

export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
       
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category </option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="Accessories">Accessories</option>
        </select>
        
       
        <input type="number" placeholder="price" name="price" required/>
        <input type="number" placeholder="stock" name="stock" required />
       <input type="text" placeholder="color" name="color" required />
        <input type="number" placeholder="size" name="size" required />

        <textarea name="desc" id="desc" rows='10' placeholder="Description"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}