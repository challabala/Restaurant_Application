import React, { useState } from 'react';
import '../Css/Menubuttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Curries from './Curries';
import Soups from './Soups';
import Rice from './Rice';
import Starters from './Starters';
import Vegies from './Vegies';
import Navbar from "../Components/Navbar"


const Menubuttons = () => {


  const [component,setcomponent] = useState(1)

  return (
  <div>
<Navbar></Navbar>

<div className='d-flex justify-content-center'>
      <div className="buttons mt-lg-5 ms-lg-5">
        <button onClick={()=>setcomponent(1)} className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">Veg Soups</button>
        <button onClick={()=>setcomponent(2)} className="btn  rounded-pill border border-warning p-2 me-5 ">Veg Starters</button>
        <button onClick={()=>setcomponent(3)} className="btn rounded-pill border border-warning p-2 ps-4 pe-4 me-5">Veg Curries</button>
        <button  onClick={()=>setcomponent(4)} className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">Veg Rices</button>
        
        <button  onClick={()=>setcomponent(5)} className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">Dry Veggies</button>
        
      </div>
    </div>



{component===1?<Soups/>:null}
{component===2?<Starters/>:null}
{component===3?<Curries/>:null}
{component===4?<Rice/>:null}
{component===5?<Vegies/>:null}


  </div>
  );
}

export default Menubuttons;
