import styled from 'styled-components';
import { tablet } from './breakpoints';

const Grid = styled.div`
    display: flexbox;
    @media ${tablet} { 
        max-width: 800px;
    }
`;

export default Grid;