import { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8087/api/employees'); // Ensure the endpoint is correct
        setEmployees(response.data); // Adjust if needed based on actual response structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setError('Error loading employees. Please check the console for details.');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>All Employees</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.position || 'N/A'}</td> {/* Handle cases where 'position' might be undefined */}
                <td>{employee.age}</td>
                <td>{employee.gender}</td>
                <td>{employee.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllEmployees;
