import React from 'react'
import styled from 'styled-components'
function Navigation() {
    return (
        <NavigationStyled>
            <nav className="logo"></nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`

`
export default Navigation
