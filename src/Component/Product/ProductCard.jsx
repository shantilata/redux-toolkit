import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../Redux/AllSlice/ProductSlice/ProductSlice';
import { useNavigate } from 'react-router-dom';
const ProductCard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(selectProduct(props))
        navigate("/all-products/products/" + props.id)
    }
    return (

        <Card style={{ width: '18rem' }} onClick={handleClick}>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ flex: 1 }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary">Buy @ <s>${props.price}</s> ${(props.price - (props.discountPercentage * props.price / 100)).toFixed(2)}</Button>
            </Card.Body>
        </Card>

    )
}

export default ProductCard