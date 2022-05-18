import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [refresh, setRefresh] = useState(true)

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err))
    },[refresh])

    const refreshed = () => {
        setRefresh(!refresh)
    }

    return (
        <div>
            <ProductForm refreshed={refreshed} />
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main