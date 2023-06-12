import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstraprow @5.3.0/dist/css/bootstrap.min.css"
  integrity="row sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
    });
  };

  return (
    <div>
      <h1>Basic Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="row mb-3">
          <Form.Label className="col-sm-2">First Name</Form.Label >
          <div className="col-sm-10">
            <Form.Control
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          </div>
          
        </Form.Group>
        <Form.Group className="row mb-3">
          <Form.Label className="col-sm-2">Last Name</Form.Label >
          <div className="col-sm-10">
            <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          </div>
          
        </Form.Group>
        <Form.Group className="row mb-3">
          <Form.Label className="col-sm-2">Email</Form.Label >
          <div className="col-sm-10">
            <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          
        </Form.Group>
        <Form.Group className="row mb-3">
          <Form.Label className="col-sm-2">Gender</Form.Label >
          <div className="col-sm-10">
            <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
          </div>
          
        </Form.Group>
        <br />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormPage;
