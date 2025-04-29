import React, { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    textArea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault;
    console.log(user);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">userName</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter Your Name"
              autoComplete="off"
              value={user.userName}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
              autoComplete="off"
              value={user.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="textArea">textarea</label>
            <input
              type="text"
              name="textArea"
              placeholder="Enter Your Password"
              autoComplete="off"
              value={user.textArea}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
