import React from 'react'
import styled from 'styled-components'

function ChartStats({ name, amount }) {
    return (
        <ChartStatsStyled>
            <p>{name}</p>
            <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}
const ChartStatsStyled = styled.div``
export default ChartStats
