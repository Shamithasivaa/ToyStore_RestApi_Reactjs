import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../App.css'
import BackgroundImage from '../../assets/images/seller.jpg'
const Sell = () => {
    const [product, setProduct] = useState({
    id:'',
      toyName: '',
      price: '',
      description: '',
      category:'',
      availableQty:'',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Send a POST request to your Spring Boot API to add the product
        try {
          const response = await axios.post('http://localhost:8080/api/products/add',product,{
            //method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          });
      
          if (response.status === 201) {
            console.log('Product added successfully.');
            setProduct({
                id:'',
      toyName: '',
      price: '',
      description: '',
      category:'',
      availableQty:'',
              });
            // Reset the form or provide user feedback as needed
          } else {
            console.error('Failed to add product.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

    return (
        <div style={ HeaderStyle}><center>
            <h2 style={{padding:'40px'}}></h2>
            <h2><b>Seller</b></h2>
            <h5>Enter the details</h5></center>
            <div className="text-center">
            <form action="/home" onSubmit={handleSubmit}>
            <input
            name="id"
            placeholder="Id"
            value={product.id}
            onChange={handleChange}/>
            <br></br><br></br>
            <span>
            <input
            type="text"
            name="toyName"
            placeholder="Toy Name"
            value={product.toyName}
            onChange={handleChange}/></span>
            <br></br><br></br>
            <span>
        <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}/></span>
            <br></br><br></br>
            <span>
        <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}/></span>
            <br></br><br></br>
        <span>
        <textarea
        type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
        /></span>
        <br></br><br></br>
        <span>
        <textarea
        type="number"
            name="availableQty"
            placeholder="Available Quantity"
            value={product.availableQty}
            onChange={handleChange}
        /></span>
        <br></br><br></br>
        <span>
      <button type="submit">Add Product</button></span>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    );
};
export default Sell;
const HeaderStyle = {
  width: "100vw",
  height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}