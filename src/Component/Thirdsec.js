import React from 'react'
import Image from "../Images/thirdsecimg.svg";
import Arrow2 from "../Images/arrow2.svg";

export default function Thirdsec() {
    return (
        <div>
            <div className="thirdsec">
                <div className="empower ">
                    <div className="flex">
                    <h1>Empower Your <br />
                        Conversations with Connect</h1>
                    <p>Strengthen relationships, enhance collaboration, <br /> and build meaningful interactions with a <br /> seamless networking experience. Whether for <br /> business or personal growth.</p></div>
                    <button><strong>Get Started</strong> <img src={Arrow2} alt="" srcset="" /></button>
                </div>
                <div className="two">
                    <div className="image"><img src={Image} alt="" srcset="" /></div>
                <div className="unleash">
                    <div className="flex">
                    <h1>Unleash the full Financial <br />
                        Potential with our Best <br />
                        Features</h1>
                    <ul>
                        <li>Suppliers</li>
                        <li>Products</li>
                        <li>Architects</li>
                        <li>Builders</li>
                    </ul>
                    </div>
                    <p>Elevate your experience with cutting-edge tools designed <br />
                        for efficiency, creativity, and seamless performance.</p>
                </div>
                </div>
                <div className="twosections">
                <div className="assist">
                    <h1>Assistance You <br /> 
                    Need!</h1>
                    <p>Get the support you deserve, <br />
                    whenever you need it.</p>
                    <button>
                       <i> <b> Let's Chat</b></i></button>
                </div>
                <div className="fun">
                <h1>Fun & Feel your own <br />
                Designs</h1>
                <p>Design should be an exciting journey where you explore, <br />
                experiment, and bring your unique ideas to life.</p>
                <button>Learn more</button>
                </div>
                </div>
            </div>
        </div>
    )
}
