import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-headinjg">An exceptional service, at the right price <span>at the right price</span></h3>
            </InnerLayout>
        </PaymentStyled>
    )
}
const PaymentStyled = styled.section``
export default PaymentSection
