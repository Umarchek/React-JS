import React from 'react'
import styled from 'styled-components'
import PrimaryButtons from './PrimaryButtons'
import logo from '../img/logo.svg'
function Navigation() {
    return (
        <NavigationStyled>
            <nav className="logo">
                <img src={logo} alt="" />
            </nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <PrimaryButtons name={'Sign Up'} />
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height:center;
    align-items:center;
    padding-top:50px;

    ul{
        display:flex;
        justify-content: space-between;
        width:40%;

    }
`
export default Navigation
