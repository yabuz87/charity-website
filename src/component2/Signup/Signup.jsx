import React from 'react'
import "./Signup.css"
import img1 from "../../assets/corn.svg"
import img2 from "../../assets/leaf.svg"

const Signup = () => {
  return (
    <div>
        <div>
              <img className="img-svg1" src={img1}></img>
              <img className="img-svg2" src={img2}></img>
              <img className="img-svg3" src={img2}></img>
      
          </div>
          <div className="container-lg">
            <form className="form-container container-lg">
            <h2 className="text-center">Signup</h2>
              <div className="email-input-container">
                <label> Full Name</label>
                <div className="input-div1">
                  <input type="text" className="input-container" placeholder="Write your Full Name" />
                </div>
              </div>
              <div className="email-input-container">
                <label>Phone</label>
                <div className="input-div1">
                  <input type="text" className="input-container" placeholder="+251" />
                </div>
              </div>
              <div className="password-input-container">
              <div className="password-input-container">
                <label>email</label>
                <div className="input-div">
                  <input type="email" className="input-container" placeholder="Write your email" />
                </div>
              </div>
                <label>Password</label>
                <div className="input-div">
                  <input type="password" className="input-container" placeholder="Write your Password" />
                </div>
                <div className="password-input-container">
                <label>Confirm Email</label>
                <div className="input-div">
                  <input type="password" className="input-container" placeholder="Comfirm your Password" />
                </div>
              </div>
              </div>
              <button className=" px-5 login-button">Submit</button>
            </form>
          </div>
    </div>
  )
}

export default Signup
