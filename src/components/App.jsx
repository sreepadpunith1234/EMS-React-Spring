import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './HeaderComponent';
import Footer from './FooterComponent';
import GetAllEmployees from './GetAllEmployees';
import EmployeeComponent from './EmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import DeleteEmployeeComponent from './DeleteEmployeeComponent';
import './App.css'; // Ensure this import is present

function Homepage() {
  return (
    <div className="homepage"> {/* Apply the class here */}
      <h1 className='text-center'>Welcome to the Employee Management System</h1><br></br><br></br>

      <div className="buttons-container">
        <Link to="/get-all-employees" className="btn btn-info me-2">Get All Employees</Link>
        <Link to="/add-employee" className="btn btn-primary me-2">Add Employee</Link>
        <Link to="/update-employee/1" className="btn btn-secondary me-2">Update Employee</Link>
        <Link to="/delete-employee/1" className="btn btn-danger">Delete Employee</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/get-all-employees" element={<GetAllEmployees />} />
            <Route path="/add-employee" element={<EmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
            <Route path="/delete-employee/:id" element={<DeleteEmployeeComponent />} />
          </Routes>
        </main>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
