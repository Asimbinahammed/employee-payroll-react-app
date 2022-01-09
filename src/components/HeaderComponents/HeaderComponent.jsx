import react, { Component } from 'react'
import "./HeaderComponent.scss"
import logo from '../../assets/images/logo.png';
//import logo from 'D:\eclipse\nmbvc\CFP\React\my-first-app\src\assets\images\logo.png';
//src={require(`../assets/images/logo.png`)}

export class HeaderComponent extends Component {
    render() {
        return (
            <div>
            <header className='header-content header'>
            <div className="logo-content">
                <img src={logo} className="Logo"></img>
                <div>
                    <span className="emp-text">EMPLOYEE</span>
                    <span className="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        
    </div>
        )
    }
}

export default HeaderComponent   