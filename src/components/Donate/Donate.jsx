import React, { useState } from 'react';
import { banks } from "../../assets/imgs/banks";
import './donate.css';

const Donate = () => {
  const [termsVisible, setTermsVisible] = useState(false);
  const [selectedBank,setSelectBank]=useState({
    name:'',
    index:null
  });

  const handleBankSelect = (bank, index) => {
    setSelectBank({
      ...selectedBank, // Spread the current state
      name: bank.name, // Update the name
      index: index,    // Update the index
    });
  };
  

  const handleTermsVisibility = (e) => {
    e.preventDefault();
    setTermsVisible(!termsVisible);
  };

  return (
    <>
      <div className="container-fluid donate-img-page"></div>
      <h1 className="donation-title">Donation</h1>
      <h3 className="sub-title1">Thank You for Your Support!</h3>
      <p className="p-beneath-sub-title">Here is the form you can fill in with your appropriate choice to help this society and make a good impact on others</p>
      <h2 className="text-center">Donation Form</h2>
      <div className="donation-form container-lg">
        <form className="needs-validation align-items-center justify-content-center border-none" noValidate>
         
          
          <div>
            <h4 className="text-center my-3">Donating methods</h4>
            <div className="bank-seletion-part banks-container">
         
  {banks.map((oneBank, index) => (
    <div key={index} className="border m-1  rounded-1">
      <div
        className={`each-bank-container row  bank-icon ${
          selectedBank.index === index ? 'selected-bank-class' : ''
        }`}
      >
       <div className="d-flex justify-content-center align-items-center">
       <img src={oneBank.img} alt={oneBank.name} className=" banks-img  " />
       
       </div>
        <div className="in-one-bank-div md-col-4 sm-col-6">
        <p className="">Name: {oneBank.name}</p>
        <p>Account Name: {oneBank.accName}</p>
        <p className="">Account: {oneBank.accNo}</p>
        
        </div>
        
      </div>
      <div className="d-flex justify-content-center align-items-center" >
  <button
    type="button"
    className={`btn  my-1  ${selectedBank.index === index ? 'btn-secondary' : 'btn-success'} `}
    onClick={() => handleBankSelect(oneBank.name, index)}
  >
    {selectedBank.index === index ? 'Selected' : 'Select'}
  </button>
</div>
    </div>
  ))}
</div>
          </div>
          <div className="col-12 my-5  p-2">
      <div className="d-flex flex-column justify-content-center align-items-center ">
       
        

        {/* Terms and Conditions Section with Animation */}
        <div className={`terms-container ${termsVisible ? "show" : ""} border p-2 m-2 rounded-2`}>
          <h4 className="text-center">Privacy and Terms of Conditions</h4>
          <p>We deeply appreciate your generous and compassionate heart in supporting our cause...</p>
          <p>When you fill out the donation form, you will receive an encouraging message once a month...</p>
          <p>Additionally, we will send you updates on any new agendas...</p>
          <p>Thank you for being with us. Stay blessed.</p>
        </div>
         {/* Button Section */}
        <div>
          <button className="btn btn-secondary" onClick={handleTermsVisibility}>
            {termsVisible ? "Read Less" : "Read Terms and Privacy"}
          </button>
        </div>
        {/* Checkbox Section */}
        <div className="form-check pt-2">
          <input className="form-check-input " style={{"cursor":"pointer"}} type="checkbox" id="invalidCheck" required />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">You must agree before submitting.</div>
        </div>
        
      </div>
    </div>
 
          <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;

  