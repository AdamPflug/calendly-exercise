import * as React from "react";
import styled from 'styled-components';

const GridContainer = styled.div<{$columnWidth: string, $gap: string}>`
    display: grid;
    width: 100%;
    grid-template-columns: repeat( auto-fill, ${ props => props.$columnWidth });
    gap: ${ props => props.$gap };
    justify-content: space-around;
`;

type Props = {
    columnWidth: string,
    gap: string,
    children: React.ReactNode
};

export default function Grid(props: Props) {
    const {columnWidth, gap, ...rest} = props;
    return <GridContainer $columnWidth={columnWidth} $gap={gap} {...rest} />
}
