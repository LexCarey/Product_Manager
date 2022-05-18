import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div style={{borderTop: "1px black solid", marginTop: "25px"}}>
            <h1>All Products</h1>
            {props.products.map( (product, i) =>
                <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
            )}
        </div>
    )
}

export default ProductList