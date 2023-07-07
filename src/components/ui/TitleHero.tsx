import * as React from "react";
import styled, { css } from 'styled-components';
import { space, fontSizes } from '../layout/theme';

export type Props = {
    image?: string,
    title?: string
    children?: React.ReactNode
}

export default function TitleHero (props: Props) {
    const titleContent = props.title || props.children;
    return <HeroContainer>
            {props.image && <Image src={props.image} alt={props.title} />}
            {titleContent&& <Title $hasImage={!!props.image}>
                {titleContent}
            </Title>}
        </HeroContainer>
};
const Title = styled.header<{$hasImage: boolean}>`
    display: block;
    font-size: ${fontSizes[3]};

    ${props => props.$hasImage ? css`
        color: #FFF;
        background: #000;
        background: linear-gradient(0deg, rgba(30,30,30,.6) 0%, rgba(30,30,30,.6) 60%, rgba(30,30,30,0) 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: ${space[3]} ${space[3]} ${space[2]} ${space[3]};
        box-sizing: border-box;
        & > * {
            color: #FFF;
        }
    ` : ''}
`;
const HeroContainer = styled.div`
    display: block;
    position: relative;
`
const Image = styled.img`
    display: block;
    width: 100%;
`;