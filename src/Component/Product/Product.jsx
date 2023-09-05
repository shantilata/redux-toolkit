import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/AllSlice/ProductSlice/ProductSlice';
import ProductCard from './ProductCard';
import './Product.css'
const Product = () => {
    
   
    const dispatch = useDispatch();
    const Allstate = useSelector(state => state.products)
    console.log("state", Allstate);
    const { products} = Allstate;
    useEffect(
        () => { dispatch(fetchProducts()) }, [dispatch])
    return (
        <div className='productContainer'>
            {products.map((product) => (<ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}

export default Product