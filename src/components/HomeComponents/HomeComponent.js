import react, { Component } from 'react'

export class HomeComponents extends Component {
    render() {
        return (
            <div>
                <h1>Payroll Table</h1>

                <table id="payroll-table">
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salay</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Alfred</td>
                        <td>Male</td>
                        <td>CS</td>
                        <td>65000</td>
                        <td>07-09-2021</td>
                        <td></td>
                    </tr>
                    </table>
            </div>
        )
    }
}

export default HomeComponents    