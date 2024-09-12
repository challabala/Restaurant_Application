import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useCart } from './CartContext';

// Define a default image path
const DEFAULT_IMAGE_PATH = 'https://recipes.timesofindia.com/thumb/53683545.cms?imgsize=283664&width=800&height=800'; // Replace with the path to your default image

const Page3 = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3008/chickengravy');
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
    return <p>No items found</p>; // Handle the case where items isn't an array
  }

  // Function to chunk the array into rows of four items
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const rows = chunkArray(items, 4); // Split items into rows of four

  return (
    <div className='container'>
      <h4>POPULAR CHICKEN GRAVY</h4>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='category d-flex mb-4'>
          {row.map((item, index) => (
            <div key={item._id} className='box shadow d-block'>
              {/* Use a fallback image if the image URL is empty */}
              <div classname="image-containers">  

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
                  <button className="btn rounded-pill border border-warning m-4 mt-3" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page3;
