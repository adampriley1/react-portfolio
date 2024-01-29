import React, { useState } from 'react';
import './../components/style.css';
function Contact() {

        const [formData, setFormData] = useState({
          Name: '',
          Email: '',
          Message: '',
        });

        const handleInputChange = (event) => {
            // Getting the value and name of the input which triggered the change
            const value = event.target.value;
            const name = event.target.name;

            //   Updating the input's state
    setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
    
        if (formData.Name === '' || formData.Email === '' || formData.Email === '' ) {
          alert ('Please fill out all fields')
      } else {
    
          alert ('Thanks for getting in touch {formData.Name}!')
        }
    
      };

      return (

      <form onSubmit={handleFormSubmit} className="form">
           
      <label>
        Name:
        <input type="text" name="Name" value={formData.Name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="Message" value={formData.Message} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;


