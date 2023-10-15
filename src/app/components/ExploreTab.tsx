'use client'

import React from 'react'
import { Tab } from '@headlessui/react';
import Explore from './Explore';

interface Props{
    categories: Category[],
    products: Product[],
   }


const ExploreTab = ({categories, products}: Props) => {

  //function to show product based on category
  const showProducts = (category: number) => {
    return products.filter((product) => product.category._ref === categories[category]._id)
    .map((product) => <Explore products={product} key={product._id}/>)
   
  }
  console.log(showProducts(0));
  return (
    <div className='w-full flex flex-col mt-6 '>
  <Tab.Group>
    <Tab.List className="flex items-center justify-center bg-slate-50 drop-shadow-md 
    transition-shadow h-[80px]">
       {categories.map((category) => (
        <Tab 
         key={category._id}
         id={category._id}
         className={({selected}) => 
         `whitespace-nowrap rounded-t-lg pt-3 px-5 text-sm font-medium
         outline-none md:pt-4 md:px-6 md:text-base pb-0 ${
          selected ?
          "borderGradient bg-[#8b8b8b] text-black"
          : "border-b-2 border-[#e7e7e7] text-[#808182]"
         }`
         }
         >
          {category.title}
        </Tab>
      ))} 
    </Tab.List>
      <Tab.Panels className='w-[80%] mx-auto max-w-6xl pt-10 pb-24 sm:px-4 flex
      lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
      <Tab.Panel className='tabPanel'>{showProducts(0)}</Tab.Panel>
      <Tab.Panel className='tabPanel'>{showProducts(1)}</Tab.Panel>
      <Tab.Panel className='tabPanel'>{showProducts(2)}</Tab.Panel>
      <Tab.Panel className='tabPanel'>{showProducts(3)}</Tab.Panel>  
      
    </Tab.Panels>

  </Tab.Group>
    </div>
  )
}

export default ExploreTab