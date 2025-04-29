import React, { useState } from "react";

const ActualFormHandling = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChnage = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventdefault;
    console.log(employee);
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
            value={employee.firstName}
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
            value={employee.lastName}
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
            value={employee.email}
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
            value={employee.password}
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
            value={employee.phoneNumber}
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

export default ActualFormHandling;
