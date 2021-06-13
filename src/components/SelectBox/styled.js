import styled from 'styled-components';

export const Select = styled.select`
    align-items: center;
    display: flex;
    max-height:50px;
    appearance: none;
    font-size: 1em;
    border: 1px solid ${props => props.primaryText};
    flex: 1;
    outline: none;
    background: linear-gradient(to right,${props => props.primary} 0,${props => props.second} 157%);
    color: ${props => props.primaryText};
    padding: 1em 2em 1em 1em;
    border-radius:10px;
`;