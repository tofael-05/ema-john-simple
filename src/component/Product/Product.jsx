import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    // const {img, name, seller, quantity, price} = props.product;
    return (
        <div className="product">
           {/* <img src={img} alt="" />  */}
           {/* <p>{name}</p> */}
        </div>
    );
};

export default Product;