import react, { Component } from 'react'

export class AddEditPayrollComponent extends Component {
    render() {
        return (
            <div>
            <form action="#" class="form" onsubmit="save();return false">
            <div class="form-head">Employee Payroll Form</div>
            <div class="row-content">
                <label class="label text" for="name">Name</label>
                <input class="input" type="text" id="name" name="name" placeholder="Enter Your Name" required></input>
                <error-output class="text-error" for="text"></error-output>
            </div>
           
            <div class="row-content">
                <label for="profile" class="label text">Profile Image</label>
                <div class="profile-radio-content">
                    <label>
                        <input type="radio" id="profile1" name="profile" value="../assets/profile-images/Eclipse-3.png"
                            required></input>
                        <img class="profile" src="../assets/profile-images/Ellipse -3.png" id="image1" alt=""></img>
                    </label>
                    <label>
                        <input type="radio" id="profile2" name="profile" value="../assets/profile-images/Eclipse-1.png"
                            required></input>
                        <img class="profile" src="../assets/profile-images/Ellipse -1.png" id="image2" alt=""></img>
                    </label>
                    <label>
                        <input type="radio" id="profile3" name="profile" value="../assets/profile-images/Eclipse8.png"
                            required></input>
                        <img class="profile" src="../assets/profile-images/Ellipse -8.png" id="image3" alt=""></img>
                    </label>
                    <label>
                        <input type="radio" id="profile4" name="profile" value="../assets/profile-images -7.png"
                            required></input>
                        <img class="profile" id="image4" src="../assets/profile-images/Ellipse -7.png" alt=""></img>
                    </label>
                </div>
            </div>

            <div class="row-content">
            <label class="label text" for="gender">Gender</label>
            <div>
                <input type="radio" id="male" name="gender" value="male"></input>
                <label class="text" for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"></input>
                <label class="text" for="female">Female</label>
            </div>
        </div>

        <div class="row-content">
                <label class="label text" for="department">Department</label>
                <div>
                    <input type="checkbox" id="hr" name="department" value="HR"></input>
                    <label class="text" for="hr">HR</label>
                    <input type="checkbox" id="sales" name="department" value="Sales"></input>
                    <label class="text" for="sales">Sales</label>
                    <input type="checkbox" id="finance" name="department" value="Finance"></input>
                    <label class="text" for="finance">Finance</label>
                    <input type="checkbox" id="engineer" name="department" value="Engineer"></input>
                    <label class="text" for="engineer">Engineer</label>
                    <input type="checkbox" id="others" name="department" value="Others"></input>
                    <label class="text" for="others">Others</label>
                </div>
            </div>

            <div class="row-content">
                <label class="label text" for="salary">Choose Your Salary: </label>
                <input class="input" type="range" name="salary" id="salary" min="300000" step="100" max="500000"
                    value="400000"></input>
                <output class="salary-output text" for="salary">400000</output>
            </div>

            <div class="row-content">
                <label class="label text" for="startDate">Start Date</label>
                <div>
                    <select name="Day" id="day">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select name="Month" id="month">
                        <option value="Jan">January</option>
                        <option value="Feb">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="Aug">August</option>
                        <option value="Sept">September</option>
                        <option value="Oct">October</option>
                        <option value="Nov">November</option>
                        <option value="Dec">December</option>
                    </select>
                    <select name="Year" id="year">
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
            </div>

            <div class="row-content">
            <label class="label text" for="notes">Notes</label>
            <input class="input"  id="Notes" name="Notes" placeholder="Enter Notes" ></input>
        </div>

        <div class="buttonParent">
                <a href="form.html" class="resetButton button cancelButton">Cancel</a>
                <div class="submit-reset">
                    <button type="submit" class="button submitButton" id="submitButton">Submit</button>
                    <button type="submit" class="button resetButton">Reset</button>
                </div>
            </div>
            
            </form>
            </div>
            
        )
    }
}

// const salary = document.querySelector('#salary');
//  const output = document.querySelector('.salary-output');
//  output.textContent = salary.value;
//  salary.addEventListener('input', function () {
//      output.textContent = salary.value;
//  });
 
//  /*
//   * Day 44 LocalStorage
//   * UC2 – On Document Load Set Event Listeners
//   */
//  window.addEventListener('DOMContentLoaded', (event) => {
//      const name = document.querySelector('#name');
//      const textError = document.querySelector('.text-error');
//      name.addEventListener('input', function () {
//          if (name.value.length == 0) {
//              textError.textContent = "";
//              return;
//          }
//          try {
//              (new EmployeePayrollData()).name = name.value;;
//              textError.textContent = " ";
//          } catch (e) {
//              textError.textContent = e;
//          }
//      });
//  });
 
//  /*
//   * Day 44 LocalStorage
//   * UC 3 – On Save Create Employee Payroll Object
//   */
//  const save = () => {
//      try {
//          let employeePayrollData = createEmployeePayroll();
//      } catch (e) {
//          return;
//      }
//  }
 
//  const createEmployeePayroll = () => {
//      let employeePayrollData = new EmployeePayrollData();
//      try {
//          employeePayrollData.name = getInputValueById('#name');
//      } catch (e) {
//          setTextValue('.text-error', e);
//      }
//      employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
//      employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
//      employeePayrollData.department = getSelectedValues('[name=department]');
//      employeePayrollData.salary = getInputValueById('#salary');
//      employeePayrollData.note = getInputValueById('#notes');
//      let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
//      employeePayrollData.date = Date.parse(date);
//      alert(employeePayrollData.toString());
//      return employeePayrollData;
//  }
 
//  const getSelectedValues = (propertyValue) => {
//      let allItems = document.querySelectorAll(propertyValue);
//      let selItems = [];
//      allItems.forEach(item => {
//          if (item.checked) selItems.push(item.value);
//      });
//      return selItems;
//  }
 
//  const getInputValueById = (id) => {
//      let value = document.querySelector(id).value;
//      return value;
//  }
 
//  const getInputElementValue = (id) => {
//      let value = document.getElementById(id).value;
//      return value;
//  }

export default AddEditPayrollComponent    