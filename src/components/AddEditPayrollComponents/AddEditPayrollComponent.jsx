import React, { Component } from "react";
import EmployeeService from "../../service/EmployeeService";
import "./AddEditPayrollComponent.scss"
import profile1 from '../../assets/profile-images/Ellipse -3.png'
import profile2 from '../../assets/profile-images/Ellipse -1.png'
import profile3 from '../../assets/profile-images/Ellipse -8.png'
import profile4 from '../../assets/profile-images/Ellipse -7.png'

export class AddEditPayrollComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      imagePath: "",
      gender: "male",
      salary: 0,
      department: "",
      notes: "",
    };
  }

  componentDidMount() {
    if (this.state.id !== 'add') {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          name: employee.name,
          imagePath: employee.imagePath,
          gender: employee.gender,
          salary: employee.salary,
          department: employee.department,
          notes: employee.notes,
        });
      });
    }
  }

  getHeadingAccordingToComponent() {
    if (this.state.id === 'add') {
      return "Add Employee";
    } else {
      return "Update Employee";
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleImagePathChange = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  handleSalaryChange = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  
  handleDepartmentChange = (event) => {
    this.setState({
      department: event.target.value,
    });
  };
  handleNotesChange = (event) => {
    this.setState({
      notes: event.target.value,
    });
  };

  showMessageAndRedirectToHome(response) {
    console.log(response);
    alert(this.getHeadingAccordingToComponent() + " Successful");
    this.props.history.push("/");
  }
  

  handleFormSubmit = (event) => {
    // alert(`${this.state.name} ${this.state.imagePath} ${this.state.gender}`)
    if (this.state.id === 'add') {
      EmployeeService.addEmployee(this.state)
        .then((res) => {
          this.showMessageAndRedirectToHome(res);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    } else {
      EmployeeService.updateEmployee(this.state, this.state.id).then((res) => {
        this.showMessageAndRedirectToHome(res);
      });
    }

    event.preventDefault();
  };

  handleCancelClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="form-content">
            
                <form onSubmit={this.handleFormSubmit} className="form" action="#" >
                <div className="form-head"> {this.getHeadingAccordingToComponent()}</div>

                  <div className="row-content">
                   <label className="label text" htmlFor="name">Name</label>
                    <input
                      className="input"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </div>

                  <div className="row-content">
                   <label className="label text" htmlFor="imagePath">Image Path</label>
                   

                    <div className="profile-radio-content">
                                <label>
                                    <input type="radio" id="profile1" name="imagePath" value="profile1" onChange={this.handleImagePathChange}  />
                                    <img className="profile" id="image1" alt="img" src={profile1} />
                                </label>
                                <label>
                                    <input type="radio" id="profile2" name="imagePath" value="profile2" onChange={this.handleImagePathChange}  />
                                    <img className="profile" id="image2" alt="img" src={profile2} />
                                </label>
                                <label>
                                    <input type="radio" id="profile3" name="imagePath" value="profile3" onChange={this.handleImagePathChange}  />
                                    <img className="profile" id="image3" alt="img" src={profile3} />
                                </label>
                                <label>
                                    <input type="radio" id="profile4" name="imagePath" value="profile4" onChange={this.handleImagePathChange}  />
                                    <img className="profile" id="image4" alt="img" src={profile4} />
                                </label>
                                <error-output className="text-error" htmlFor="text"></error-output>
                            </div>
                  </div>


                  <div className="row-content">
                   <label className="label text" htmlFor="gender">Gender</label>
                    <select
                      className="input"
                      onChange={this.handleGenderChange}
                    required>
                    <option value="none" selected disabled hidden>Select an Option</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>

                  <div className="row-content">
                   <label className="label text" htmlFor="salary">Salary</label>
                    
                    <input className="input" type="range" name="salary" id="salary"  min="3000" max="50000" step="100"  value={this.state.salary} onChange={this.handleSalaryChange}/>
                            <output className="salary-output text" htmlFor="salary">{this.state.salary}</output>
                            <error-output className="text-error" htmlFor="text"></error-output>
                        
                  </div>

                  <div className="row-content">
                   <label className="label text" htmlFor="name">Department</label>
                    

                    <div className="profile-radio-content">
                    <input type="checkbox" id="hr" name="department" value="HR"                       onChange={this.handleDepartmentChange}
                    />
                    <label class="text" for="hr">HR</label>
                    <input type="checkbox" id="sales" name="department"                       onChange={this.handleDepartmentChange}
                    value="Sales"/>
                    <label class="text" for="sales">Sales</label>
                    <input type="checkbox" id="finance" name="department"                       onChange={this.handleDepartmentChange}
                    value="Finance"/>
                    <label class="text" for="finance">Finance</label>
                    <input type="checkbox" id="engineer" name="department"                        onChange={this.handleDepartmentChange}
                    value="Engineer"/>
                    <label class="text" for="engineer">Engineer</label>
                    <input type="checkbox" id="others" name="department"                        onChange={this.handleDepartmentChange}
                    value="Others"/>
                    <label class="text" for="others" >Others</label>
                                <error-output className="text-error" htmlFor="text"></error-output>
                            </div>
                    
                  </div>


                  <div className="row-content">
                   <label className="label text" htmlFor="name">Notes</label>
                    <input
                      className="input"
                      type="text"
                      value={this.state.notes}
                      onChange={this.handleNotesChange}
                    />
                  </div>

                  <div className="row-content">
                    <button className="btn btn-success" type="submit">
                      {this.getHeadingAccordingToComponent()}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.handleCancelClick}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
         
    );
  }
}

export default AddEditPayrollComponent;