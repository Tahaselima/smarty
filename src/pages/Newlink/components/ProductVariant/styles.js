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
    color: ${props => (props.secondText)}
`;