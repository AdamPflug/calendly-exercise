import * as React from "react";
import { Link } from "gatsby";
import styled, { css } from 'styled-components';
import TitleHero from "./TitleHero";

export type CardProps = {
    to?: string,
    image?: string,
    title?: string
    children: React.ReactNode
}

export default function Card (props: CardProps) {
    return <CardContainer to={props.to}>
        <TitleHero image={props.image} title={props.title} />
        {props.children}
    </CardContainer>;
};

const CardContainer = styled(Link)`
    border: 1px solid #CCC;
    border-radius: 12px;
    overflow: hidden;
`;