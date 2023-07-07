import * as React from "react";
import styled, { css } from 'styled-components';

export type Props = {
    image?: string,
    title?: string
}

export default function TitleHero (props: Props) {
    return <HeroContainer>
            {props.image && <Image src={props.image} alt={props.title} />}
            {props.title && <Title hasImage={!!props.image}>
                {props.title}
            </Title>}
        </HeroContainer>
};
const Title = styled.header<{hasImage: boolean}>`
    display: block;
    font-size: 1.5em;

    ${props => props.hasImage ? css`
        color: #FFF;
        background: #000;
        background: linear-gradient(0deg, rgba(30,30,30,.6) 0%, rgba(30,30,30,.6) 60%, rgba(30,30,30,0) 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px 10px 5px 10px;
        box-sizing: border-box;
    ` : ''}
`;
const HeroContainer = styled.div`
    display: block;
    position: relative;
`
const Image = styled.img`
    display: block;
`;