import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:auto;
    width:33%;
    color: ${props => (props.secondText)};
    @media only screen and (max-width: 768px) {
        width:100%;
    }
    & > h3 {
        font-size: 50px;
        margin: auto;
        margin-top: 30px;
    }
    & > p {
        margin: auto;
    }
`;
