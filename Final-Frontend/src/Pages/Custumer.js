
import React from 'react';
import '../Css/Custumer.css';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';





const Custumer = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DEFAULT_IMAGE_PATH = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s';

  useEffect(() => {
    // Function to fetch reviews from the backend
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3008/reviews'); 
        const data = await response.json();

        if (response.ok) {
          setReviews(data.data);
        } else {
          throw new Error(data.message || 'Failed to fetch reviews');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>
    
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.photo || DEFAULT_IMAGE_PATH} alt={review.name} className="review-photo" />
            <div className="review-content">
              <h3>{review.name}</h3>
              <p>{review.message}</p>
              <div className="rating">
                {'⭐'.repeat(review.rating)}
              </div>
              
            </div>
          </div>
        ))}
        <Link to="/addreview"> <button className='addrev-btn'>Add review</button></Link>
        
      </div>
      
    </div>
  );
};

export default Custumer;

