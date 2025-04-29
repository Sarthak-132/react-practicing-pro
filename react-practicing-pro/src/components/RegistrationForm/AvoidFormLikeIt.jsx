import React, { useState } from "react";

const AvoidFormLikeIt = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChnage = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventdefault;

    // when key and values are same we can write it once
    const formData = {
      firstName,
      LastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
  };

  return (
    <>
      <form onClick={handleFormSubmit}>
        <div className="container">
          <h1>Sign up</h1>
          <p>Please fill in this form to create an account.</p>
          {/* firstname */}
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleInputChnage}
            required
          />
          {/* lastname */}
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={LastName}
            onChange={handleInputChnage}
            required
          />
          {/* email */}
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleInputChnage}
            required
          />
          {/* password */}
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handleInputChnage}
            required
          />
          {/* Phone number */}
          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="9131123442"
            value={phoneNumber}
            onChange={handleInputChnage}
            required
          />
          {/* t & p */}
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          {/* clearfix */}
          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AvoidFormLikeIt;
