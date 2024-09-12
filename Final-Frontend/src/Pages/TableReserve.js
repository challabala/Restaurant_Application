import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const TableReserve = () => {
  return (
    <Carousel>
          <Carousel.Item>
    <div className='card'>
      <div className='container d-flex justify-content-around' height="500px">
       
        
        <div className='pt-5 ps-5'>
          <h1 className='p-2'>Do You Have Any BreakFast<br></br>Plan Today? Reserve<br></br>Your Table</h1>
          <p className='p-2'>Make online reservations, read restaurant reviews from breakfasts,<br></br> and earn points towards free meals. Open table is real time<br></br> online reservation</p>
          <button className=' btn rounded-pill btn-warning w-50 p-2'>Make Reservation</button>
        </div>
        <div className='pe-5'>
          <img src="https://cdn.vox-cdn.com/thumbor/7Pi1tMVhe65Thr_AlWYe01ldGc0=/0x80:1000x830/1200x800/filters:focal(0x80:1000x830)/cdn.vox-cdn.com/uploads/chorus_image/image/48566575/shutterstock_169364927.0.0.jpg" height="450px"></img>
        </div>

        </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='card'>
            <div className='container d-flex justify-content-around' height="500px">
              <div className='pt-5 ps-5'>
                <h1 className='p-2'>Do You Have Any Lunch<br></br>Plan Today? Reserve<br></br>Your Table</h1>
                <p className='p-2'>Make online reservations, read restaurant reviews from lunch,<br></br> and earn points towards free meals. Open table is real time<br></br> online reservation</p>
                <button className=' btn rounded-pill btn-warning w-50 p-2'>Make Reservation</button>
              </div>
              <div className='pe-5'>
                <img src="https://img.freepik.com/premium-photo/isolated-chicken-biryani-traditional-indian-food-spicy-fried-rice-ramadan-iftar-meal-eid-dinner_667286-5762.jpg?w=2000" height="450px"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='card'>
            <div className='container d-flex justify-content-around' height="500px">
              <div className='pt-5 ps-5'>
                <h1 className='p-2'>Do You Have Any Dinner<br></br>Plan Today? Reserve<br></br>Your Table</h1>
                <p className='p-2'>Make online reservations, read restaurant reviews from dinners,<br></br> and earn points towards free meals. Open table is real time<br></br> online reservation</p>
                <button className=' btn rounded-pill btn-warning w-50 p-2'>Make Reservation</button>
              </div>
              <div className='pe-5'>
                <img src="https://www.pngmart.com/files/15/Food-Plate-Top-View-Non-Veg-PNG.png" height="450px"></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      




        

    
  )
}

export default TableReserve