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
                        <ChartStats name={'Balance'} amount={'$250'} />
                        <ChartStats name={'Last Transaction'} amount={'$1,000'} />
                    </div>
                </div>
                <div className="chart-right">

                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
.chart-con{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px){
        grid-template-columns: repeat(1, 1fr);
    }
    .chart-left{
        width: 80%;
        @media screen and (max-width: 1347px){
            width: 100%;
        }
        .stats{
            img{
                box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                border-radius: 62px;
                width: 100%;
            }
            .stats-money{
                display: flex;
                padding-bottom: 1.3rem;
                justify-content: space-between;
            }
        }
    }
    .chart-right{
        padding-left: 2rem;
        p{
            padding: 1.3rem 0;
        }
    }
}
`

export default ChartSection