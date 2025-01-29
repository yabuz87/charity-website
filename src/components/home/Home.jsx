import React from 'react'
import img1 from "../../assets/doug-linstedt-jEEYZsaxbH4-unsplash.jpg"
import img2 from "../../assets/seth-doyle-zf9_yiAekJs-unsplash.jpg"
import img3 from "../../assets/bill-wegener-LqOO5Ko0zSo-unsplash.jpg"
import "./home.css"


const Home = () => {
  return (
    <>
     <div className="img-page">
     <div className="discription-area">
     <h1 className="text-light ">Hello Guys</h1>
     <p className="text-light ">this is the official website of _____ charity assosication</p>
     </div>
    </div>
    <div className="beneath-home-page">
      <div>
      <img src={img1}/>
      <p className="text-center">one for one</p>
      </div>
      <div>
      <img src={img2}/>
      <p className="text-center">one for one</p>
      </div>
      <div>
      <img src={img3}/>
      <p className="text-center">one for one</p>
      </div>

    </div>
    </>
  )
}

export default Home
