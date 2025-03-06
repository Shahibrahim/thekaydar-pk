import React from 'react'
import hero from "../Images/hero.svg"
import search from "../Images/search.svg"
import Arrow from "../Images/arrow.svg"
export default function Hero() {
  return (
    <div>
    <img className='heroimg' src={hero} alt="" srcset="" />
    <div class="navbar">
            <nav>
                
                <ul className='leftside'>
                    <li><a href="/"><b>All categories</b></a></li>
                    <li><a href="/"><b>Featured selections</b></a></li>
                    <li><a href="/"><b>Contact</b></a></li>
                </ul>
            </nav>
            <nav>
            <ul className='rightside'>
                <li><a href="/"><b>Help Center</b></a></li>
                    <li><a href="/"><b>Solutions</b></a></li>
                    <li><a href="/"><b>Ai Chatbot</b></a></li>
                </ul>
            </nav>
        </div>
        <div className="subhero">
        <h1>
        The leading B2C ecommerce <br />
        platform for local trade
        </h1>
        <div className="search my-5">
        <input type="search" name="" id="search" /><img className="searchimg"src={search} alt="" srcset="" /></div>
        <div className="buttons">
            <div className="started mx-4">
        <button className="getstarted">Get Started</button><img className="Arrow"src={Arrow} alt="" srcset="" /></div>
        <button className="talktosales">Talk to Sales</button></div>
        </div>
    </div>
  )
}
