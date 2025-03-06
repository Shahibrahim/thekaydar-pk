import React from 'react'
import Image1 from "../Images/Img1.jpeg"
import Image2 from "../Images/Img2.jpeg"
import Image3 from "../Images/Img3.jpeg"
import Image4 from "../Images/Img4.jpeg"
import Image5 from "../Images/Img5.jpeg"

export default function Extracircularservices() {
  return (
    <div className="fourthsec">
      <div className="first">
        <div className="img1">
          <img src={Image1} alt="Service 1" />
          <p>Extraordinary services</p>
        </div>
        <div className="img2">
          <img src={Image2} alt="Service 2" />
        </div>
      </div>

      <div className="second">
        <h1>
          Because we know how important it is <br />
          to <span>Connect</span> with people you care
        </h1>
        <img src={Image5} alt="Connecting" />
      </div>

      <div className="third">
        <div className="img3">
          <img src={Image3} alt="Service 3" />
        </div>
        <div className="img4">
          <p>Extraordinary services</p>
          <img src={Image4} alt="Service 4" />
        </div>
      </div>
    </div>
  )
}
