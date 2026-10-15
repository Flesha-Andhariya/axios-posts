import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Flesha',
    lastName: 'Andhariya',
    email: 'fleshaandhariya1701@gmail.com'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value;
  }

  function handleEmailChange(e) {
    person.email = e.target.value;
  }

return (
<div className="form-container">
<h2 className="form-title">Personal Information</h2>

  <div className="form-group">
    <label className="form-label">First name:</label>
    <input
      className="form-input"
      value={person.firstName}
      onChange={handleFirstNameChange}
    />
  </div>

  <div className="form-group">
    <label className="form-label">Last name:</label>
    <input
      className="form-input"
      value={person.lastName}
      onChange={handleLastNameChange}
    />
  </div>

  <div className="form-group">
    <label className="form-label">Email:</label>
    <input
      className="form-input"
      type="email"
      value={person.email}
      onChange={handleEmailChange}
    />
  </div>

  <div className="form-output">
    <h3>Entered Information</h3>
    <p>
      {person.firstName} {person.lastName}
    </p>
    <p>{person.email}</p>
  </div>
</div>

);
}
