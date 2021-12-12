import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-headinjg">An exceptional service, <span>at the right price</span></h3>
                <p>Start with our free plan and switch to premium as you grow.</p>
            </InnerLayout>
        </PaymentStyled>
    )
}
const PaymentStyled = styled.section``
export default PaymentSection
