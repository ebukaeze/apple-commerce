import React from 'react'
import Products from '../components/Products'
import { fetchProducts } from '../libs/fetchProducts'
import { fetchCategories } from '../libs/fetchCategories'
import Image from 'next/image'
import { urlFor } from '../../../sanity'
import ExploreTab from '../components/ExploreTab'

interface Props{
products: Product[],
categories: Category[],
}

const page = async ({products, categories}: Props) => {
    const productItems = await fetchProducts();
    const categoriesItems = await fetchCategories();
  return (
    <div className='flex w-full py-6 mt-4 space-y-6'>
        
        
        <ExploreTab categories={categoriesItems} products={productItems}/>
        </div>
  )
}

export default page