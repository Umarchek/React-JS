import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
function ChartStats() {
    return (
        <ChartStatsStyled>
            <InnerLayout>
                <div className="chart-left">
                    <div className="stats">

                    </div>
                </div>
                <div className="chart-right">

                </div>
            </InnerLayout>
        </ChartStatsStyled>
    )
}
const ChartStatsStyled = styled.div``
export default ChartStats
