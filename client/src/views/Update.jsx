import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate(`/products/${id}`)
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price:</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Update