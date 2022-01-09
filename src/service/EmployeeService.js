import Axios from "axios";

const BASE_URL = "http://localhost:8080/payroll/employee/";



class EmployeeService {
  
  getEmployees() {
    return Axios.get(BASE_URL );
  }
  addEmployee(employee) {
    return Axios.post(BASE_URL, employee);
  }
  getEmployeeById(employeeId) {
    return Axios.get(BASE_URL  + employeeId);
  }
  updateEmployee(employee, employeeId) {
    return Axios.put(BASE_URL  + employeeId, employee);
  }
  deleteEmployee(employeeId) {
    return Axios.delete(BASE_URL + employeeId);
  }
}

export default new EmployeeService();