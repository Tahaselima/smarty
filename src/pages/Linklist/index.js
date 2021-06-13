import React, {useContext} from 'react';
import {ThemeContext, themes} from '../../contexts/ThemeContext'
import Welcome from '../../components/svg/Welcome'
import styled from 'styled-components';



export function Linklist() {
  // eslint-disable-next-line no-unused-vars
  const {theme} = useContext(ThemeContext);
  const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    @media only screen and (max-width: 768px) {
      flex-direction: column
    }
    & > div{
      & > h1 {
        margin-top: 0px;
        margin-bottom: 0px;
        color: ${p => p.themes.primaryText};
      }
      & > p {
        max-width: 300px;
        color: ${p => p.themes.primaryText};
      }
    }
  `;

  return (
    <Wrapper themes={themes[theme]} >
      <div>
        <h1>Welcome to Smarty*</h1>
        <p>You can use the path for the product page or the popup on the right.</p>
      </div>
      <Welcome color={themes[theme].primaryText} size={'400px'}/>
    </Wrapper>
  );
}

export default Linklist;
