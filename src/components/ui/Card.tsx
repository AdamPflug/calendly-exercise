import * as React from "react";
import { Link } from "gatsby";
import styled, { css } from 'styled-components';
import TitleHero from "./TitleHero";
import { colors, space, radii } from "../layout/theme";

export type CardProps = {
    to?: string,
    image?: string,
    title?: string
    children: React.ReactNode
}

export default function Card (props: CardProps) {
    return <CardContainer to={props.to}>
        <TitleHero image={props.image} title={props.title} />
        <CardContent>{props.children}</CardContent>
    </CardContainer>;
};

const CardContainer = styled(Link)`
    border: 1px solid ${colors.background};
    border-radius: ${radii.large};
    overflow: hidden;
    color: ${colors.primary};
`;

const CardContent = styled.div`
    padding: ${space[3]};
    text-decoration: none !important;
`;