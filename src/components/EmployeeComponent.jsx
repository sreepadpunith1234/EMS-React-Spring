import { useState } from 'react';
import axios from 'axios';

const EmployeeComponent = () => {
  const [id, setId] = useState(''); // State for ID
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const employee = { id, firstName, lastName, email, gender, age };

    try {
      // Send a POST request to add a new employee
      await axios.post('http://localhost:8087/api/employees', employee);
      setMessage('Employee added successfully!');
      setError('');
      // Clear form fields after submission
      setId('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setGender('');
      setAge('');
    } catch (err) {
      // Handle any errors that occur during the request
      console.error('Error adding employee:', err);
      setMessage('');
      setError('Failed to add employee. Please check the console for details.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Employee</button>
        {message && <p className="mt-3 text-success">{message}</p>}
        {error && <p className="mt-3 text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default EmployeeComponent;
