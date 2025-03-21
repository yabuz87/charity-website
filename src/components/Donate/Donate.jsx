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
      <div className="donation-form">
        <form className="needs-validation align-items-center justify-content-center border-none" noValidate>
          <div className="">
            <input type="text" className="form-control w-50" id="validationCustom01" placeholder="First Name" required />
          </div>
          <div className="">
            <input type="text" className="form-control w-50" id="validationCustom02" placeholder="Last name" required />
          </div>
          <div className="col-md-4">
            <div className="input-group has-validation">
              <input type="text" className="form-control  w-50" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-3">
            <select className="form-select" id="validationCustom04"  placeholder="State" required>
              <option selected disabled value="">Choose...</option>
              <option>United States Of America</option>
              <option>Ethiopia</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>Kenya</option>
              <option>Sudan</option>
              <option>South Africa</option>
              <option>China</option>
              <option>Belgium</option>
              <option>Canada</option>
              <option>France</option>
              <option>Egypt</option>
              <option>Italy</option>
              <option>South Korea</option>
              <option>Japan</option>
              <option>Eritrea</option>
              <option>Djibouti</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="phone" id="validationCustom05" required />
            <div className="invalid-feedback">Please provide a valid phone.</div>
          </div>
          <div>
            <h4 className="text-center">Donating methods</h4>
            <div className="bank-seletion-part banks-container">
         
  {banks.map((oneBank, index) => (
    <div key={index} className="border">
      <div
        className={`each-bank-container  bank-icon ${
          selectedBank.index === index ? 'selected-bank-class' : ''
        }`}
      >
       <div>
       <img src={oneBank.img} alt={oneBank.name} className="mb-2 banks-img" />
       
       </div>
        <div className="in-one-bank-div">
        <p className="">Name: {oneBank.name}</p>
        <p>Account Name: {oneBank.accName}</p>
        <p className="">Account: {oneBank.accNo}</p>
        
        </div>
        
      </div>
      <button
          type="button"
          className="btn btn-secondary d-flex align-items-center justify-content-center"
          onClick={() => handleBankSelect(oneBank.name, index)} // Pass the bank and index here
        >
          {selectedBank.index === index ? 'Selected' : 'Select'}
        </button>
    </div>
  ))}
</div>

          </div>
          <div className="col-12">
            <button className="btn btn-success" onClick={handleTermsVisibility}>
              {termsVisible ? 'Read Less' : 'Read Terms and Privacy'}
            </button>
            <div className={`terms-container ${termsVisible ? 'd-block' : 'd-none'}`}>
              <h4>Privacy and Terms of Conditions</h4>
              <p>We deeply appreciate your generous and compassionate heart in supporting our cause. By participating in our donation process, we ask that you read and agree to the following terms and conditions.</p>
              <p>When you fill out the donation form, you will receive an encouraging message once a month to keep you updated on our progress. Rest assured, if you choose not to have your support mentioned to third parties, your preference will be fully respected.</p>
              <p>Additionally, we will send you updates on any new agendas related to our project to the email address you provide. By completing the donation form and checking the terms and conditions box, you agree to our terms and conditions.</p>
              <p>Thank you for being with us. Stay blessed.</p>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="invalidCheck" required />
              <label className="form-check-label" htmlFor="invalidCheck">Agree to terms and conditions</label>
              <div className="invalid-feedback">You must agree before submitting.</div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;
