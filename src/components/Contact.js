import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contactImg from './images/naruto.jpg';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      console.log('Data added to Firestore successfully!');
      // Optionally, you can reset the form or show a success message here
    } catch (error) {
      console.error('Error adding data to Firestore: ', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '20px' }}>
      <Card style={{ width: '400px' }}>
        <Card.Img variant="top" src={contactImg} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>Contact us for a better cause 🌟</Card.Title>
          <Card.Text>
            We'd love to hear from you! Whether you have a question, a comment, or just want to say hi, we're here to help.
          </Card.Text>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="success" type="submit">Submit</Button>
            </div>
          </Form>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
