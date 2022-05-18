import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => navigate('/products'))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
            <br/>
            <Link to={`/products/${id}/edit`}>Edit</Link>
            <br/>
            <Link to="/products">Home</Link>
        </div>
    )
}

export default Detail