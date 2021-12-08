import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ChartStats from './ChartStats'

function ChartSection() {
    return (
        <ChartStyled>
            <InnerLayout>
                <div className="chart-left">
                    <div className="stats">
                        <ChartStats name={'Balance'} amount={'$250'}/>
                        <ChartStats name={'Last Transaction'} amount={'$1,000'}/>
                    </div>
                </div>
                <div className="chart-right">

                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
`

export default ChartSection