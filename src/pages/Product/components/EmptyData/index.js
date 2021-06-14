import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../../../contexts/ThemeContext'
import {Wrapper} from './styles'
import {NotFound} from '../../../../components/svg/index'

export function EmptyData() {
  const {theme} = useContext(ThemeContext)
  return (
      <Wrapper {...themes[theme]}>
          <NotFound color={{...themes[theme]}.primaryText}/>
          <h3>Not Found</h3>
          <p>my products are finished bro, come later ;)</p>
      </Wrapper>
  );
}

export default EmptyData;
