import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../Redux/AllSlice/ProductSlice/ProductSlice';


const ProductView = () => {

  const all = useSelector(state => state.products);
  const { isLoading, error, selectedProduct } = all
  console.log("all",all);
  // console.log("isLoading,error,selectedProduct", isLoading, error, selectedProduct);
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params);
  useEffect(() => {
    const { dp } = params;
    dispatch(fetchProductById(dp))
  }, [])

  return (
    <div>
      <h1>Product Details</h1>
      {isLoading && <h3>.....Loading</h3>}
      {error && <h4>{error}</h4>}
      {selectedProduct != null ? <p>{selectedProduct.description}</p> : <p>select a product</p>}
    </div>
  )
}

export default ProductView