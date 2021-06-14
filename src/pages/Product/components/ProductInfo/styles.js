import styled from 'styled-components';

export const Image = styled.img`
    width:300px;
    height:300px;
    border-radius:10px;
`;
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:33%;
    color: ${props => (props.secondText)};
    @media only screen and (max-width: 768px) {
        width:100%;
    }
`;
export const Description = styled.div`
    margin-top: 20px;
    color: ${props => (props.secondText)};
    max-height: 100px;
    max-width:300px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => (props.second)}; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => (props.primaryText)}; 
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;