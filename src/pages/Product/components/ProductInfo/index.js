import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../../../contexts/ThemeContext'
import {Image, Wrapper, Description} from './styles'

export function ProductInfo({name, img, desc}) {
  const {theme} = useContext(ThemeContext)
  return (
      <Wrapper {...themes[theme]}>
          <h3>{name}</h3>
          <Image src={img}></Image>
          <Description dangerouslySetInnerHTML={{ __html: desc }} {...themes[theme]}></Description>
      </Wrapper>
  );
}

export default ProductInfo;
