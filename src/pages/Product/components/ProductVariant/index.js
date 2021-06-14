import React, { useContext, useState, useEffect } from 'react';
import SelectBox from '../../../../components/SelectBox/index'
import Button from '../../../../components/Button/index'
import { ThemeContext, themes } from '../../../../contexts/ThemeContext'
import { Wrapper} from './styles'
/* eslint-disable react-hooks/exhaustive-deps */
export function ProductVariant({variants, handleChange, selectedVariant, handleChooseProduct}) {
  const [variantTypes, setVariantTypes] = useState()
  const [variantOptions, setVariantOptions] = useState()
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    setVariantTypes(Object.keys(variants[0].attrs))
  }, [variants])

  useEffect(() => {
    if(variantTypes) {
        const dummyOptions = variantTypes.map(type => {return {[type]: variants.map(item => {return item.attrs[type]})}})
        setVariantOptions(Object.assign({}, ...dummyOptions))
    }
  }, [variantTypes])

  return (
      <Wrapper {...themes[theme]}>
          {variantOptions && variantTypes?.map((item,index) =>
             <SelectBox
              key={index}
              labelText={`Choose ${item}:`}
              options={variantOptions[item].filter((s,index) => variantOptions[item].indexOf(s) === index)}
              onChange={e => handleChange(item,e)}
              selectedVariant={selectedVariant.attrs[item]}
             />
          )}
          <Button disabled={!selectedVariant.orderable} onClick={handleChooseProduct}>Choose Product</Button>
      </Wrapper>
  );
}

export default ProductVariant;
