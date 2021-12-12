import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className='c-pare'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reprehenderit facilis quibusdam quos excepturi impedit soluta perspiciatis. Porro error mollitia molestias est, labore, odit nulla, facilis iure tenetur accusantium consequatur inventore ipsum!</p>
            </InnerLayout>
        </FaqStyled>
    )
}
const FaqStyled = styled.section`
`
export default FAQSection
