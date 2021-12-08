import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import card from '../img/creditcard.svg'
function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-left">
                    <h2 className="secondary-headeing">
                        One card for all your payments
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quisquam tempora minus at dicta impedit nemo asperiores beatae quis. Libero iusto labore placeat quam consequuntur!
                    </p>
                </div>
                <div className="card-right">
                    <img src={card} alt="" /></div>
            </InnerLayout>
        </CardSectionStyled>
    )
}
const CardSectionStyled = styled.section`
`
export default CardSection
