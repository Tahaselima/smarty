import React, { useEffect, useState } from 'react';
import { ProductInfo, ProductVariant, EmptyData } from './components/index'
import { useParams } from "react-router-dom";
import { ProductWrapper } from "./styled"
import SmartyServices from "../../services/SmartyServices"
import {Loading} from '../../components/svg/index'

export function Product() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const {id, merchantCode} = useParams()

  useEffect(() => {
    setLoading(true)
    /* eslint-disable react-hooks/exhaustive-deps */
    SmartyServices.getProduct({codes:[id], merchantCode: merchantCode || 'vineyardvines'})
      .then((response) =>{
        setData(response.data.data[0])
        setLoading(false)
      })
      .catch((error) => {
        setData(false)
        setLoading(false)
      })
  }, [id])

  const handleChange = (type,value) => {
    const attr = {...data.selectedSku.attrs, [type]: value}
    setData({
      ...data, 
      selectedSku: data.skus.find(item => JSON.stringify(item.attrs) === JSON.stringify(attr)) // 
      || {
        ...data.selectedSku, 
        orderable:false
      },
    })
  }

  return (
    <>
      {loading && <Loading/>}
      {console.log(data)}
      {!loading && data?.hasOwnProperty('selectedSku') && 
        <ProductWrapper>
          <ProductInfo
            name={data.selectedSku.name || data.name}
            img={data.selectedSku.images[0]}
            desc={data.selectedSku.desc}
          />
          <ProductVariant
            variants={data.skus}
            handleChange={handleChange}
            selectedVariant={data.selectedSku}
            handleChooseProduct={() => console.log(data.selectedSku)}
          />  
        </ProductWrapper>
      }
      {!loading && !data && <EmptyData />}
    </>
  );
}

export default Product;
