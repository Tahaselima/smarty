import styled from 'styled-components';

export const ProductWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    @media only screen and (max-width: 768px) {
        display:grid;
      }
`;