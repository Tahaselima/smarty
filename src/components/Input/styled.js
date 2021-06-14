import styled from 'styled-components';

export const Text = styled.input`
    align-items: center;
    display: flex;
    margin: auto;
    appearance: none;
    font-size: 1em;
    border: 1px solid #383838;
    flex: 1;
    width: 100%;
    border-radius: 10px;
    outline: none;
    background: linear-gradient(to right,${props => props.theme.second} 0,${props => props.theme.primary} 157%);
    color: #ff8338;
    padding: 1em 2em 1em 1em;
    margin-top: 5px;
    &:focus{
        box-shadow: inset 0px 0px 29px -16px rgba(0,0,0,0.82);
        border: 1px solid ${props => props.theme.primaryText};
    }
    &.error {
        border: 1px solid red !important;
    }
`;
export const Label = styled.p`
    align-items: center;
    appearance: none;
    display: flex;
    margin: auto;
    flex: 1;
    width: 140px;
    color: ${props => props.theme.primaryText};
    margin:auto;
    font-size: 10px;
    margin-bottom:2px;
    margin-top:5px;
`;