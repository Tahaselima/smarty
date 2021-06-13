import styled from 'styled-components';

export default Input = styled.input`
    align-items: center;
    display: flex;
    margin: auto;
    appearance: none;
    font-size: 1em;
    border: 1px solid #383838;
    flex: 1;
    border-radius: 10px;
    min-width: 260px;
    outline: none;
    background: linear-gradient(to right,${props => props.theme.second} 0,${props => props.theme.primary} 157%);
    color: #ff8338;
    padding: 1em 2em 1em 1em;
    margin-top: 20px;
    &:focus{
        box-shadow: inset 0px 0px 29px -16px rgba(0,0,0,0.82);
        border: 1px solid ${props => props.theme.primaryText};
    }
    &.error {
        border: 1px solid red !important;
    }
`;