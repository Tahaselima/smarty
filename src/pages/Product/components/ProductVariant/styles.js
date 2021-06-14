import styled from 'styled-components';

export const Image = styled.img`
    width:300px;
    height:300px;
    border-radius:10px;
`;
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:33%;
    color: ${props => (props.secondText)};
    margin-top: 40px;
    @media only screen and (max-width: 768px) {
        margin-top: 30px;
        width:100%;
    }
`;