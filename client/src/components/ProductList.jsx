import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => props.refreshed())
        .catch(err => console.log(err))
    }

    return (
        <div style={{borderTop: "1px black solid", marginTop: "25px"}}>
            <h1>All Products</h1>
            {props.products.map( (product, i) =>
                <div key={i}>
                    <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                    <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProductList