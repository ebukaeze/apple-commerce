import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../../sanity';


interface Props{
    products: Product;
}

const Explore = ({products}: Props) => {

  return (
    <div>
        <div className='flex flex-col'>
                <div className='w-full flex py-4 items-start justify-center space-y-6 mt-12'>
                <div className='flex-none relative w-48'>
                    <Image src={urlFor(products.image[0]).url()} alt={products._id}
                    className='flex inset-0 h-[280px] w-[230px] object-contain' width={240} height={320}
                    loading='lazy'/>
                    </div>
                    <form className="flex-auto p-6 bg-white rounded-lg drop-shadow-md">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        {products.title}
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        ${products.price}
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium py-4">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-700 py-4">
      {products.description}
    </p>
    </form>
    </div>
       </div>
    </div>
  )
}

export default Explore