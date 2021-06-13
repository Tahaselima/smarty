import React, { useEffect, useState } from 'react';
import { ProductInfo, ProductVariant } from './components/index'
import { useParams } from "react-router-dom";
import { ProductWrapper } from "./styled"
import SmartyServices from "../../services/SmartyServices"
import Loading from '../../components/svg/Loading'

export function Newlink() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    SmartyServices.getProduct({codes:[id], merchantCode:'vineyardvines'})
      .then((response) =>{
        setData(response.data.data[0])
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }, [id])

  const handleChange = (type,value) => {
    const attr = {...data.selectedSku.attrs, [type]: value}
    setData({...data, selectedSku: data.skus.find(item => JSON.stringify(item.attrs) === JSON.stringify(attr))})
  }

  return (
    <>
      {loading && <Loading/>}
      {console.log(data)}
      {data.hasOwnProperty('selectedSku') && 
        <ProductWrapper>
          <ProductInfo
            name={data.selectedSku.name}
            img={data.selectedSku.images[0]}
            desc={data.selectedSku.desc}
          />
          <ProductVariant
            variants={data.skus}
            handleChange={handleChange}
            selectedVariant={data.selectedSku.attrs}
            handleChooseProduct={() => console.log(data.selectedSku)}
          />  
        </ProductWrapper>
      }
    </>
  );
}

export default Newlink;
