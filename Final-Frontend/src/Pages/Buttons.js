import React, { useState } from 'react';
import '../Css/Menubuttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"
import Page6 from "./Page6"
import Navbar from "../Components/Navbar"


const Buttons = () => {


  const [component,setcomponent] = useState(1)

  return (
  <div>

<Navbar></Navbar>
<div className='d-flex justify-content-center mb-5'>
      <div className="buttons mt-lg-5 ms-lg-5">
      <button onClick={()=>setcomponent(1)}  className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">NON VEG STARTERS</button>
        <button onClick={()=>setcomponent(2)} className="btn  rounded-pill border border-warning p-2 me-5 ">CHICKEN TANDOOR</button>
        <button onClick={()=>setcomponent(3)} className="btn rounded-pill border border-warning p-2 ps-4 pe-4 me-5">CHICKEN GRAVY</button>
        <button onClick={()=>setcomponent(4)} className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">MUTTON</button>
        
        <button onClick={()=>setcomponent(5)} className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">FAMILY PACK</button>
        <button onClick={()=>setcomponent(6)} className="btn  rounded-pill border border-warning p-2 ps-4 pe-4 me-5">BIRIYANI (NON-VEG)</button>
        
      </div>
    </div>

{component===1?<Page1/>:null}
{component===2?<Page2/>:null}
{component===3?<Page3/>:null}
{component===4?<Page4/>:null}
{component===5?<Page5/>:null}
{component===6?<Page6/>:null}


  </div>
  );
}

export default Buttons;
