import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const ProductsList = ({allProducts}) => {
    return (

        <div className='products-container' >
            {
                !allProducts 
                ? <h3>... No products to display ...</h3>
                : allProducts.map( product => 
                    <div className='products-item' key={product.id}>
    
                        {/* PRODUCT IMAGE */}
                        <Link to={`/products/${product.id}`}>
                        <img src={product.image} className='product-image' alt='product'/>
                        </Link>
    
                        {/* PRODUCT INFO */}
                        <p  className='product-title'>{product.title.length > 75 ? product.title.substring(0,75) + '...' : product.title}</p>
                        <h4 className='product-price'><b>{'R$ ' + product.price.toFixed(2)}</b></h4>
    
                    </div>
                )
            }
        </div>
    )
}

export default ProductsList;
