import React from 'react'
import styled from 'styled-components'

function ChartSection({name,amount}) {
    return (
        <ChartStyled>
            <p>{name}</p>
            <h4>{amount}</h4>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
`

export default ChartSection