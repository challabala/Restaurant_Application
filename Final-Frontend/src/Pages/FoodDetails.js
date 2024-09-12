import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/FoodDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../Components/Navbar';
import Footer from '../Pages/Footer';
import { useCart } from './CartContext';
import { Rating } from '@mui/material';

const FoodDetails = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3008/menuitems');
        if (response.data.status === 'success') {
          console.log(response.data.data); 
          setItems(response.data.data); 
        }
      } catch (error) {
        console.error('There was an error fetching the menu items!', error);
      }
    };

    fetchMenuItems();
  }, []);

  if (!Array.isArray(items)) {
    return <p>No items found</p>;
  }

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const rows = chunkArray(items, 4);

  return (
    <>
    <Navbar />
      <div className="container">
      <h4>POPULAR DISHES</h4>
  <div className="row">
    {items.map((item, index) => (
      <div className='food-display col-lg-3 col-md-4 col-sm-6' key={index}>
        <div className='food-item box shadow'>
          <div className='food-item-img-container'>
            <img className='food-item-img' src={item.image} alt={item.itemname} />
          </div>
          <div className='food-item-info'>
            <div className='food-item-img-rating'>
              <div className='food-item-name'><p>{item.itemname}</p></div>
              <div className="d-flex justify-content-center align-items-center">
                <Rating className='center' name="rating" defaultValue={Number(item.rating)} />
              </div>
            </div>
            <p className='food-item-desc'>{item.description}</p>
            
          </div>
          <div className='food-item-cart'>
              <p className='food-item-price'>₹{item.price}</p>
              <button className='cart-button' onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
      </div>
    ))}
  </div>
</div>
<Footer/>
    </>
  );
};

export default FoodDetails;
