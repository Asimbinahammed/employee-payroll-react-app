import react, { Component } from 'react'

export class HeaderComponents extends Component {
    render() {
        return (
            <div className='navbar navbar-xpand-md navbar-dark bg-dark'>
                <a className='navbarBrand' href='/'>
                    <strong>Employee Payroll</strong>
                </a>
            </div>
        )
    }
}

export default HeaderComponents    