import styled from 'styled-components';
import { tablet } from './breakpoints';

const Grid = styled.div<{columnWidth: string, gap: string}>`
    display: grid;
    width: 100%;
    grid-template-columns: repeat( auto-fill, ${ props => props.columnWidth });
    gap: ${ props => props.gap };
    justify-content: space-around;
`;

export default Grid;