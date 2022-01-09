import react, { Component } from 'react'
import "./HomeComponent.scss"
import EmployeeService from '../../service/EmployeeService';


export class HomeComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          employees: [],
        };
      }
    
      componentDidMount() {
        this.getEmployees();
      }
    
      getEmployees = () => {
        EmployeeService.getEmployees().then((res) => {
          console.log(res);
          this.setState({
            employees: res.data,
          });
        });
      };
    
      handleUpdateEmployeeClick(id) {
        this.props.history.push(`/add-update/${id}`);
      }
    
      // make network move
      handleDeleteEmployeeClick(employeeId) {
        EmployeeService.deleteEmployee(employeeId) .then((res) => {
            alert(res.data.message);
            this.setState({
              employees: this.state.employees.filter(employee => employee.id !== employeeId),
            });
          });
      }

      

      
    render() {
        return (
            <div>
            <div className='navbar navbar-xpand-md'>
        <ul>
        <li className="nav-item">
                  <a className="nav-link" href="/add-update/add">
                    Add
                  </a>
                  </li>
        </ul>
    </div>
                <h1>Payroll Table</h1>

                <table id="payroll-table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Image Path</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    
                    <th>Department</th>
                    <th>Notes</th>
                    <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.imagePath}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.department}</td>
                  <td>{employee.notes}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.handleUpdateEmployeeClick(employee.id)
                      }
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.handleDeleteEmployeeClick(employee.id)} className="btn btn-danger">
                      Delete
                    </button>
                     
                  </td>
                </tr>
              ))}
            </tbody>
                    </table>
            </div>
        )
    }
}

export default HomeComponent  