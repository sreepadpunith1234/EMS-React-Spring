import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8087/api/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAdd = () => {
    navigate('/add-employee');
  };

  const handleUpdate = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const handleDelete = (id) => {
    navigate(`/delete-employee/${id}`);
  };

  return (
    <div className="container">
      <h2 className="text-center">Employee List</h2>
      <button className="btn btn-primary mb-2" onClick={handleAdd}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
              <td>
                <button className="btn btn-warning" onClick={() => handleUpdate(employee.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
