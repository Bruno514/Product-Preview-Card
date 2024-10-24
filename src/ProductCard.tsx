import styles from "./ProductCard.module.scss";
import IconCart from "./assets/images/icon-cart.svg";
import DesktopImage from "./assets/images/image-product-desktop.jpg";
import MobileImage from "./assets/images/image-product-mobile.jpg";

function ProductCard() {
  return (
    <article className={styles.card}>
      <picture>
        <source media="(min-width: 75rem)" srcSet={DesktopImage} />
        <img src={MobileImage} />
      </picture>
      <section className={styles.productInfo}>
        <p className={styles.productCategory}>PERFUME</p>
        <h1 className={styles.productName}>Gabrielle Essence Eau de Parfum</h1>
        <p className={styles.productDescription}>
          A floral, solar and voluptuos interpreation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>
        <section className={styles.productPrices}>
          <p className={styles.productNewPrice}>$149.99</p>
          <p className={styles.productOldPrice}>
            <s>$169.99</s>
          </p>
        </section>
        <button className={styles.addToCartButton}>
          <img src={IconCart} alt="Cart Image" />
          <p>Add to cart</p>
        </button>
      </section>
    </article>
  );
}

export default ProductCard;
