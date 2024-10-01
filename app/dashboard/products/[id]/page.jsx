import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
export default function SingleProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input
            type="title"
            name="title"
            placeholder="phones"
            required
          />

          <label>Price</label>
          <input
            type="price"
            name="price"
            placeholder="price"
            required
          />

          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="How many...."
            required
          />

          <label>colour</label>
          <input type="text" name="colour" placeholder="Blue..." />

          <label>Size</label>
          <input
            type="number"
            name="size"
            placeholder=" "
          />

          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computers</option>
            <option value="phone">Phones</option>
          </select>

          <textarea name="desc" id="desc" rows="5" placeholder="Description" ></textarea>
          <button >Update</button>
        </form>
      </div>
    </div>
  );
}
