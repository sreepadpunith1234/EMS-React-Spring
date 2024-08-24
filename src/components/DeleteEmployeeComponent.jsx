import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [inputId, setInputId] = useState('');
  const [deleteId, setDeleteId] = useState(id);
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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8087/api/employees/${deleteId}`);
      setMessage('Employee deleted successfully!');
      setError('');
      setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error('Error deleting employee:', err);
      setMessage('');
      setError('Failed to delete employee. Please check the console for details.');
    }
  };

  const handleAccept = () => {
    handleDelete();
  };

  const handleDecline = () => {
    setShowConfirm(false);
    setInputId('');
  };

  const handleInputIdChange = (e) => {
    setInputId(e.target.value);
  };

  const handleSetId = () => {
    setDeleteId(inputId);
    setShowConfirm(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Delete Employee</h2>
      {employee ? (
        <div>
          {showConfirm ? (
            <div>
              <p>Are you sure you want to delete the employee with the ID {deleteId}?</p>
              <button className="btn btn-danger" onClick={handleAccept}>
                Accept
              </button>
              <button className="btn btn-secondary ms-2" onClick={handleDecline}>
                Decline
              </button>
            </div>
          ) : (
            <div>
              <p>Are you sure you want to delete the employee with the following details?</p>
              <ul>
                <li><strong>ID:</strong> {employee.id}</li>
                <li><strong>Name:</strong> {employee.firstName} {employee.lastName}</li>
                <li><strong>Email:</strong> {employee.email}</li>
                <li><strong>Gender:</strong> {employee.gender}</li>
                <li><strong>Age:</strong> {employee.age}</li>
              </ul>
              <button className="btn btn-warning" onClick={() => setShowConfirm(true)}>
                Confirm Deletion
              </button>
            </div>
          )}
          {!showConfirm && (
            <div className="mt-3">
              <h3>Enter the ID of the employee you want to delete:</h3>
              <input
                type="text"
                value={inputId}
                onChange={handleInputIdChange}
                placeholder="Enter employee ID"
                className="form-control"
              />
              <button className="btn btn-primary mt-2" onClick={handleSetId}>
                Set ID
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading employee details...</p>
      )}
      {message && <p className="mt-3 text-success">{message}</p>}
      {error && <p className="mt-3 text-danger">{error}</p>}
    </div>
  );
};

export default DeleteEmployeeComponent;
