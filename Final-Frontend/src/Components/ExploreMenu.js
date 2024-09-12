import React from 'react'
import "./ExploreMenu.css"
import desert from "./images/dessert.jpeg"
//import salad from "./images/salad1.jpg"
import rolls from "./images/rolls.jpeg"
import sandwich from "./images/sandwich.jpeg"
import cake from "./images/cake.jpeg"
//import veg from "./images/veg.jpg"
import pasta from "./images/pasta.jpeg"
import noodles from "./images/noodles.jpeg"
import { TbMarquee } from 'react-icons/tb'
const ExploreMenu = () => {


  return (<div>
    
    <div className='explore-menu' id='explore-menu'>
        <h1 className='mt-3'>Explore Our Special Food</h1>
        <p className="explore-menu-text"></p>
        <marquee>
        <div className="explore-menu-list"> 
            
            <div className="explore-menu-list-item">
                <div>
                <img className="explore-menu-images" src={cake} alt=""></img></div>
                <p>Salad</p></div>
            <div className="explore-menu-list-item "><div>
                <img className="explore-menu-images"src={rolls} alt=""></img></div>
                <p>Rolls</p></div>
            <div className="explore-menu-list-item">
                <img className="explore-menu-images"src={desert} alt=""></img>
                <p>Deserts</p></div>
            <div className="explore-menu-list-item">
                <img className="explore-menu-images" src={sandwich} alt=""></img>
                <p>Sandwich</p></div>
            <div className="explore-menu-list-item">
                <img className="explore-menu-images" src={cake} alt=""></img>
                <p>cake</p></div>
            <div className="explore-menu-list-item">
                <img className="explore-menu-images" src={cake} alt=""></img>
                <p>Pure Veg</p></div>
            <div className="explore-menu-list-item">
                <img className="explore-menu-images" src={pasta} alt=""></img>
                <p>pasta</p></div>
            <div className="explore-menu-list-item">
                <img className="explore-menu-images" src={noodles} alt=""></img>
                <p>Noodles</p></div>
                
                
                </div>
                </marquee>
                <hr/>
    </div></div>
  )
}

export default ExploreMenu