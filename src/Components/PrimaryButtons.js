import React from 'react'
import styled from 'styled-components'
function PrimaryButtons({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}
const ButtonStyled = styled.button`

`;
export default PrimaryButtons
