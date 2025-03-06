import React from 'react'
import Arrow2 from "../Images/arrow2.svg";
import Product from "../Images/product.svg";
import Google from "../Images/Google.svg";
import Facebook from "../Images/Facebook.svg";
import Youtube from "../Images/Youtube.svg";
import Pinterest from "../Images/Pinterest.svg";
import Twitch from "../Images/Twitch.svg";
import Webflow from "../Images/Webflow.svg";

export default function Secondsec({ hideSection = false }) {
    return (
        <div>
            <div className="secondsec">
                <h1>Discover The Products You Need</h1>
                <p>From cutting-edge technology to everyday essentials, find<br></br>
                    products that enhance your lifestyle and drive your success.<br></br>
                    Start discovering today!</p>
                <div className="products">
                    <div className="product1 mx-5"> 
                        <img src={Product} alt="" />
                        <h1>Hardware</h1>
                        <p>The best you need</p>
                        <h3>$30.00</h3>
                    </div>
                    <div className="product2 mx-4">
                        <img src={Product} alt="" />
                        <h1>Hardware</h1>
                        <p>The best you need</p>
                        <h3>$30.00</h3>
                    </div>
                    <div className="product3 mx-5">
                        <img src={Product} alt="" />
                        <h1>Hardware</h1>
                        <p>The best you need</p>
                        <h3>$30.00</h3>
                    </div>
                </div>

                {/* Hide the button when hideSection is true */}
                {!hideSection && (
                    <div className="viewall">
                        <button type="button"><b>View All</b></button>
                        <img src={Arrow2} alt="" />
                    </div>
                )}

                {!hideSection && (
                    <div className="secondsecfooter">
                        <h2>Trusted by 10,000 companies around the world</h2>
                        <div className="images">
                            <img src={Google} alt="" />
                            <img src={Facebook} alt="" />
                            <img src={Youtube} alt="" />
                            <img src={Pinterest} alt="" />
                            <img src={Twitch} alt="" />
                            <img src={Webflow} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
