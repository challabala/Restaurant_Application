import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useCart } from './CartContext';  // Import the custom hook

const DEFAULT_IMAGE_PATH = 'https://recipes.timesofindia.com/thumb/53683545.cms?imgsize=283664&width=800&height=800';

const Page2 = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();  // Use the addToCart function

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3008/chickentandoori');
        if (response.data.status === 'success') {
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
    <div className='container'>
      <h4>POPULAR CHICKEN TANDOORI</h4>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='category d-flex mb-4'>
          {row.map((item) => (
            <div key={item._id} className='box shadow d-block'>
              <div className="image-containers">
                <img className='item-image'
                  src={item.image || DEFAULT_IMAGE_PATH}
                  alt={item.itemname}
                />
              </div>
              <h6 className='item-name'>{item.itemname}</h6>
              <div className="d-flex justify-content-center align-items-center">
                <Rating className='center' name="rating" defaultValue={Number(item.rating)} />
              </div>
              <div className='description-container'>
              <p className='p-3'>{item.itemdescription}</p>
              </div>
             
              <div className='d-flex justify-content-between'>
                <h4 className='ps-1 mt-3 ms-4'>₹{item.price}</h4>
                <div className='buttons'>
                  <button 
                    className="btn rounded-pill border border-warning m-4 mt-3"
                    onClick={() => addToCart(item)}  // Add to cart on click
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page2;
