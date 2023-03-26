import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    // const {img, name, seller, quantity, price} = props.product;
    return (
        <div className="product">
            {/* <img src={props?.img} alt="" />  */}
            <img src={props?.product?.img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{props?.product?.name}</h4>
                <h5>Price : {props?.product?.price}</h5>
                <p>Manufacturing : {props?.product?.seller}</p>
                <p>Rating : {props?.product?.ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;