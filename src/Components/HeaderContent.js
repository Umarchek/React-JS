import React from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';
import { Fade } from 'react-reveal';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="left-content">
            <h1>Smart banking for freelancers</h1>
            <p className="white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolores repellendus reprehenderit nulla quo adipisci nihil nobis blanditiis nostrum aspernatur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores totam vel ipsam numquam, eius, laborum voluptatibus, quaerat repellendus at fugiat sequi adipisci fugit ut iusto explicabo nihil doloremque cumque rem.
            </p>
            <SecondaryButton name={'Register Now'}/>
            </div>
            <div className="right-content"></div>
        </HeaderContentStyled>
    )
}
const HeaderContentStyled = styled.div`
`
export default HeaderContent
