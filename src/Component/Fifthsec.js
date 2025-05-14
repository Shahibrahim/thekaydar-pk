import React from 'react'
import Image from '../Images/Sectionfive.svg'


export default function Fifthsec() {
  return (
    <div>
      <div className="fifthsec">
        <h1>Empowering businesses through Local trade</h1>
        <p>Strengthening communities by connecting businesses with trusted local <br /> suppliers. We foster growth, sustainability, and economic impact by making <br /> local trade more accessible, efficient, and transparent. Grow with local, thrive <br /> globally!</p>
        <div className="three">
            <div className="first">
            <img src={Image} alt="" />
                        <h1>OUR MISSION</h1>
                        <p>Make it easy to get all at on <br />place</p>
            </div>
            <div className="two">
                <div className="second"><img src={Image} alt="" />
                        <h1>OUR LOCATION</h1>
                        <p>We have teams around <br /> Punjab</p>
                        </div><div className="third"><img src={Image} alt="" />
                        <h1>OUR ESG PROMISES</h1>
                        <p>Respondible care. Proper <br />efficiency</p>
                        </div>
            </div>
        </div>
      </div>
     
    </div>
  )
}
