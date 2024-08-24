import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    age: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8087/api/employees/${id}`);
        setEmployee(response.data);
      } catch (err) {
        console.error('Error fetching employee:', err);
        setError('Error fetching employee details.');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8087/api/employees/${id}`, employee);
      setMessage('Employee updated successfully!');
      setError('');
      // Redirect to another page after successful update, like homepage
      setTimeout(() => navigate('/'), 2000); // Delay for message visibility
    } catch (err) {
      console.error('Error updating employee:', err);
      setMessage('');
      setError('Failed to update employee. Please check the console for details.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Update Employee</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            value={employee.gender}
            onChange={handleChange}
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
            name="age"
            className="form-control"
            value={employee.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update Employee</button>
        {message && <p className="mt-3 text-success">{message}</p>}
        {error && <p className="mt-3 text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default UpdateEmployeeComponent;
