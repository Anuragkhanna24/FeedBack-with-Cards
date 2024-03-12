import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FeedbackForm = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');


  const validateForm = () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      address.trim() === '' ||
      country.trim() === '' ||
      !isValidEmail(email) ||
      !isValidPhoneNumber(phoneNumber)
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };


  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/, ''); 
    setPhoneNumber(input);
  };

  const handleSubmit = () => {
  
    validateForm();

  
    if (isFormValid) {
      console.log('Submitted Feedback:', {
        firstName,
        lastName,
        address,
        country,
        email,
        phoneNumber
      });
      
     
      setFirstName('');
      setLastName('');
      setAddress('');
      setCountry('');
      setEmail('');
      setPhoneNumber('');
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="feedback-form" style={{ backgroundColor: '#222', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ color: '#fff' }}>Feedback Form</h2>
        <TextField
          label="First Name *"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={validateForm}
          error={!firstName.trim()}
          helperText={!firstName.trim() && 'First Name is required'}
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
          required
        />
        <TextField
          label="Last Name *"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={validateForm}
          error={!lastName.trim()}
          helperText={!lastName.trim() && 'Last Name is required'}
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
          required
        />
        <TextField
          label="Address *"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={validateForm}
          error={!address.trim()}
          helperText={!address.trim() && 'Address is required'}
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
          required
        />
        <TextField
          label="Country *"
          variant="outlined"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={validateForm}
          error={!country.trim()}
          helperText={!country.trim() && 'Country is required'}
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
          required
        />
        <TextField
          label="Email *"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            validateForm();
            setEmailError(!isValidEmail(email) ? 'Invalid email format' : '');
          }}
          error={emailError !== ''}
          helperText={emailError}
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
          required
        />
        <TextField
          label="Phone Number *"
          type="tel"
          variant="outlined"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onBlur={() => {
            validateForm();
            setPhoneNumberError(!isValidPhoneNumber(phoneNumber) ? 'Invalid phone number format' : '');
          }}
          error={phoneNumberError !== ''}
          helperText={phoneNumberError}
          style={{ marginBottom: '10px' }}
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
          required
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ backgroundColor: '#1976d2', color: '#fff' }}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default FeedbackForm;
