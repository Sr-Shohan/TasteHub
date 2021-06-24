import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Navigation = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: "lightblue" }} dark color='primary'>
                <div className='container'>
                    <NavbarBrand href='/' >Taste Hub</NavbarBrand>
                </div>


            </Navbar>
        </div>
    )
}

export default Navigation;