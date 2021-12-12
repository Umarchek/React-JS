import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className='c-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reprehenderit facilis quibusdam quos excepturi impedit soluta perspiciatis. Porro error mollitia molestias est, labore, odit nulla, facilis iure tenetur accusantium consequatur inventore ipsum!</p>
            </InnerLayout>
        </FaqStyled>
    )
}
const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
`;
export default FAQSection
