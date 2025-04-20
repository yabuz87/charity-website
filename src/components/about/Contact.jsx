import React from 'react';

const Contact = () => {
  return (
    <div className="d-flex flex-column align-items-center  justify-content-center vh-100 ">
    <h2>Contact Us</h2>
      <div className="d-flex flex-column align-items-center justify-content-center rounded-3 p-5" style={{borderWeight:"1px"}}> 
      
      <textarea rows="5" cols="90" className="shadow rounded-3 border p-3"  placeholder="write your message here to us"></textarea>
      <div className="m-3 w-100" style={{outline:"none"}}> <input type="mail" className=' w-100 p-1 shadow' placeholder="your email here"style={{outline:"none",border:"none"}} /></div>
      <button className="btn btn-primary px-3">Send</button>
      </div>
    </div>
  );
};

export default Contact;