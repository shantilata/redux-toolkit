import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
import styles from "./ProductView.module.css";
import Carousel from "react-bootstrap/Carousel";
const ProductView = () => {
  const productState = useSelector((state) => state.products);
  const { isLoading, error, selectedProduct } = productState;
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const { dp } = params;
    dispatch(fetchProductById(dp));
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Product Details</h1>
      {isLoading && <h3>.....Loading</h3>}
      {error && <h4>{error}</h4>}
      {selectedProduct != null ? (
        <div className={styles.ProductBox}>
          <div className={styles.CarousalContainer}>
            <Carousel fade={false}>
              {selectedProduct.images.map((image) => (
                <Carousel.Item>
                  <div className={styles.CarousalImageContainer}>
                    <img className={styles.CarousalImage} src={image} alt="" />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className={styles.InfoContainer}>
            <div className={styles.Title}>{selectedProduct.title}</div>
            <div className={styles.InfoBox}>
              <p>Brand: {selectedProduct.brand}</p>
            </div>
            <div className={styles.InfoBox}>
              <p>Category: {selectedProduct.category}</p>
            </div>
            <div className={styles.InfoBox}>
              <p>Stock: {selectedProduct.stock}</p>
            </div>
            <div className={styles.InfoBox}>
              <p>Rating: {selectedProduct.rating}</p>
            </div>
            <div className={styles.InfoBox}>
              <p>Price: {selectedProduct.price}</p>
            </div>
            <div className={styles.InfoBox}>
              <p>Description: {selectedProduct.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>select a product</p>
      )}
    </div>
  );
};

export default ProductView;
