import Link from 'next/link'
import React from 'react'

function Categories() {
  return (
    <nav className=' flex justify-center py-5'>
    <ul className='inline-flex gap-x-6 font-semibold space-x-10'>
      <li className=' w-full hover:scale-105 py-2 px-4 rounded-3xl hover:cursor-pointer'>
        Home
        {/* <div className='w-full rounded-lg bg-rose-300 group-hover:visible invisible ease-linear h-1 transition-all'></div> */}
      </li>
      <Link href={"/Merch"}>
        <li className='hover:scale-105 py-2 px-4 rounded-3xl hover:cursor-pointer'>
          Merch
        </li>
      </Link>
      <li className='hover:scale-105 py-2 px-4 rounded-3xl hover:cursor-pointer'>Camisetas</li>
      <li className='hover:scale-105 py-2 px-4 rounded-3xl hover:cursor-pointer'>Calcetines</li>
      <li className='hover:scale-105 py-2 px-4 rounded-3xl hover:cursor-pointer'>Gorras</li>
    </ul>
  </nav>
  )
}

export default Categories