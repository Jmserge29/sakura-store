'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Product({product}) {
  const router = useRouter();
  
  return (
    <div className='m-4 mb-8 justify-center items-center' onClick={() => router.push(`/Product/${product.id}`)}>
            <Image className=' hover:opacity-75 cursor-pointer' src={product.image} width={500} height={500} alt="Picture of the author"/>
            <div className='w-full text-center mt-2 flex-col'>
                <span className='  text-gray-800 font-medium text-xs'>{product.name}</span>
                <span className=' font-semibold block oldstyle-nums text-sm'>${product.price}</span>
            </div>
    </div>
  )
}

export default Product